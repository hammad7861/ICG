import Heading from '../../components/ui/Heading';
import { useEffect, useState } from 'react';
import Button from '../../components/ui/Button';
import { Form, message } from 'antd';
import FormInput from '../../components/ui/FormInput';
import useGetDataForAddEvent from '../../Hooks/EventDetails/useGetDataForAddEvent';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteEvent, editEvent, viewEvent } from '../../services/api/event';
import CustomDragger from '../../components/ui/CustomDragger';
import FormInputs from '../../components/ui/FormInputs';

const ViewEventDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { formItems, formItems2, validationRule } = useGetDataForAddEvent();
  const { id: eventId } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ['view-event-detail'],
    queryFn: () => viewEvent(eventId),
  });

  const { mutate, isPending: editPending } = useMutation({
    mutationKey: ['add-event'],
    mutationFn: (Data) => editEvent(Data, eventId),
    onSuccess: (Data) => {
      message.success(Data.message);
      setIsEdit(false);
      navigate(`/event-details`);
    },
  });
  const { mutate: deleteItem, isPending: deletePending } = useMutation({
    mutationKey: ['add-event'],
    mutationFn: () => deleteEvent(eventId),
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/event-details`);
    },
  });
  useEffect(() => {
    if (!isPending && data) {;
      form.setFieldsValue({
        eventName: data?.name,
        eventDescription: data?.description,
        startDate: data?.start_date,
        endDate: data?.end_date,
        eventStatus: data?.status,
        comments: data?.comments,
        bannerImage: data?.banner,
      });
    }
  }, [data, form, isEdit, isPending, eventId]);

  if (isPending) {
    return '...Loading';
  }

  return (
    <div className='child-container !mb-[34px] pb-[34px]'>
      <Heading className=''>Event Information</Heading>

      <Form
        form={form}
        className='pt-[40px] !w-full'
        onFinish={(values) => {
          if (!isEdit) {
            return setIsEdit(true);
          }
          mutate(values);
        }}
        key={data}
      >
        <Form.Item
          name='bannerImage'
          valuePropName='fileList'
        >
          <CustomDragger
            image={data?.banner}
            form={form}
            isEdit={isEdit}
          />
        </Form.Item>
        {formItems.map((item, index) => {
          return (
            <div
              key={index}
              className='w-full flex'
              id='add-job'
            >
              <h1 className='text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]'>
                {item.label}:
              </h1>
              <FormInputs
                disabled={!isEdit}
                item={item}
              />
            </div>
          );
        })}
        {
          <div
            className='w-full flex'
            id='add-job'
          >
            <h1 className='text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]'>
              Event Dates:
            </h1>
            <div className='flex items-center w-full gap-x-[14px]'>
              <FormInput
                name='startDate'
                placeholder='Start Date'
                rules={validationRule}
                disable={!isEdit}
              />
              <FormInput
                name='endDate'
                placeholder='End Date'
                rules={validationRule}
                disable={!isEdit}
              />
            </div>
          </div>
        }
        {formItems2.map((item, index) => {
          return (
            <div
              key={index}
              className='w-full flex'
              id='add-job'
            >
              <h1 className='text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]'>
                {item.label}:
              </h1>
              <FormInputs
                disabled={!isEdit}
                item={item}
              />
            </div>
          );
        })}
        <div className='w-full flex mt-[30px] justify-end gap-x-[9px]'>
          <Button
            onClick={() => {
              deleteItem();
            }}
            isLoading={deletePending}
            className='btn-red !h-[46px] w-[150px] flex justify-center'
          >
            Delete
          </Button>
          <Button
            htmlType='submit'
            isLoading={editPending}
            className='btn-green !h-[46px] w-[150px] flex justify-center'
          >
            Edit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ViewEventDetail;
