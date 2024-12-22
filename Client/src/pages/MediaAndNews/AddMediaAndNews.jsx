import { Button, Form, message } from 'antd';
import Heading from '../../components/ui/Heading';
import CustomDragger from '../../components/ui/CustomDragger';
import useGetDataForAddMediaAndNews from '../../Hooks/MediaAndNewsDetails/useGetDataForAddMediaAndNews';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { addMediaAndNews } from '../../services/api/mediaAndNews';
import FormInputs from '../../components/ui/FormInputs';
import FormTextArea from '../../components/ui/FormTextArea';

const AddMediaAndNews = () => {
  const [form] = Form.useForm();
  const image = Form.useWatch('image', form);

  const type = Form.useWatch('type', form);

  const { formItems, formItems2, validationRule } =
    useGetDataForAddMediaAndNews();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ['add-mediaAndNews'],
    mutationFn: (Data) => addMediaAndNews(Data),
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/mediaAndNews-details`);
    },
  });

  return (
    <div className='child-container'>
      <Heading>Media and News</Heading>
      <Form
        form={form}
        className='pt-[40px] !w-full'
        onFinish={(values) => {
          mutate(values);
        }}
        id='add-product'
      >
        <Form.Item
          name='bannerImage'
          valuePropName='fileList'
        >
          <CustomDragger
            form={form}
            image={image}
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
              <FormInputs item={item} />
            </div>
          );
        })}

        {type && (
          <div className='bg-[#EBFFFF] py-[20px]  px-[20px] w-full rounded-[20px]'>
            <h1 className='text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]'>
              {type === 'Press Release' ? 'Media Contact' : 'Add your Content'}
            </h1>
            {type === 'Press Release' ? (
              formItems2.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='w-full flex'
                    id='add-job'
                  >
                    <h1 className='text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]'>
                      {item.label}:
                    </h1>
                    <FormInputs item={item} />
                  </div>
                );
              })
            ) : (
              <FormTextArea
                name={'content'}
                rules={validationRule}
                className='text-[14px] text-[#6D7D93] placeholder:text-[#6D7D93] urbanist-regular'
              />
            )}
          </div>
        )}
        <div className='w-full flex mt-[30px] justify-end gap-x-[9px]'>
          <Button className='btn-red !h-[46px] w-[150px] flex justify-center'>
            Delete
          </Button>
          <Button
            htmlType='submit'
            isLoading={isPending}
            className='btn-green !h-[46px] w-[150px] flex justify-center'
          >
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddMediaAndNews;
