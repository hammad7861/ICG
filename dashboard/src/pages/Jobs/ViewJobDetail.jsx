import Heading from "../../components/ui/Heading";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import InputUpload from "../../components/ui/InputUpload";
import AntdSelect from "../../components/ui/AntdSelect";
import { Form, message } from "antd";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddJob from "../../Hooks/JobDetails/useGetDataForAddJob";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteJob, editJob, viewJob } from "../../services/api/job";
import Switch from "../../components/ui/Switch";
const ViewJobDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [publish, setPublish] = useState(false);
  const { formItems } = useGetDataForAddJob();
  const { id: jobId } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["view-job-detail"],
    queryFn: () => viewJob(jobId),
  });
  const { mutate, isPending: editPending } = useMutation({
    mutationKey: ["add-job"],
    mutationFn: (Data) => editJob(Data, publish, jobId),
    onSuccess: (Data) => {
      message.success(Data.message);
      setIsEdit(false);
    },
  });
  const { mutate: deleteItem, isPending: deletePending } = useMutation({
    mutationKey: ["add-job"],
    mutationFn: () => deleteJob(jobId),
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/job-details`);
    },
  });
  useEffect(() => {
    if (!isPending && data) {
      form.setFieldsValue({
        title: data?.title,
        department: data?.department,
        location: data?.location,
        type: data?.employment_type,
        description: data?.description,
        scheduled: data?.scheduled,
        scheduled_date: data?.scheduled_date,
      });
    }
    setPublish(data?.published);
  }, [data, form, isEdit, isPending, jobId]);

  if (isPending) {
    return "...Loading";
  }

  return (
    <div className="child-container !mb-[34px] pb-[34px]">
      <Heading className="">Job Information</Heading>

      <Form
        form={form}
        className="pt-[40px] !w-full"
        onFinish={(values) => {
          if (!isEdit) {
            return setIsEdit(true);
          }
          mutate(values);
        }}
        key={data}
      >
        {formItems.map((item, index) => {
          return (
            <div key={index} className="w-full flex" id="add-job">
              <h1 className="text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]">
                {item.label}:
              </h1>
              {item.type === "upload" ? (
                <InputUpload
                  rules={item.rule}
                  name={item.id}
                  disable={!isEdit}
                  placeholder={item.placeholder}
                  form={form}
                />
              ) : item.type === "select" && isEdit ? (
                <Form.Item name={item.id} rules={item.rule} className="w-full">
                  <AntdSelect
                    background={"#FFF"}
                    options={[
                      {
                        label: "Option 1",
                        value: "Option",
                      },
                    ]}
                    className={
                      "!bg-transparent  urbanist-regular !border !border-black  !h-[46px]"
                    }
                    defaultValue={data?.employment_type}
                    disable={!isEdit}
                    placeholder={item.placeholder}
                    form={form}
                  />
                </Form.Item>
              ) : (
                <FormInput
                  name={item.id}
                  rules={item.rule}
                  placeholder={item.placeholder}
                  disable={!isEdit}
                  className={
                    "text-[14px] text-[#6D7D93]  placeholder:text-[#6D7D93] urbanist-regular"
                  }
                  form={form}
                />
              )}
            </div>
          );
        })}
        <Form.Item name="scheduled" initialValue={data?.scheduled} noStyle>
          <input type="hidden" />
        </Form.Item>
        <Form.Item
          name="scheduled_date"
          initialValue={data?.scheduled_date}
          noStyle
        >
          <input type="hidden" />
        </Form.Item>
        {isEdit && (
          <div className="flex items-center ">
            <h1 className="text-[24px] col-span-1 font-medium w-[400px]   text-[#023B3B] h-[46px]">
              Publish
            </h1>
            <div className="w-full">
              <Switch
                checked={publish}
                onChange={(checked) => {
                  setPublish(checked);
                }}
              />
            </div>
          </div>
        )}
        <div className="w-full flex mt-[30px] justify-end gap-x-[9px]">
          <Button
            onClick={() => {
              deleteItem();
            }}
            isLoading={deletePending}
            className="btn-red !h-[46px] w-[150px] flex justify-center"
          >
            Delete
          </Button>
          <Button
            htmlType="submit"
            isLoading={editPending}
            className="btn-green !h-[46px] w-[150px] flex justify-center"
          >
            Edit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ViewJobDetail;
