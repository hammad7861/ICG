import { Button, Form, message } from "antd";
import Heading from "../../components/ui/Heading";
import FormInput from "../../components/ui/FormInput";
import FormTextArea from "../../components/ui/FormTextArea";
import useGetDataForAddJob from "../../Hooks/JobDetails/useGetDataForAddJob";
import AntdSelect from "../../components/ui/AntdSelect";
import InputUpload from "../../components/ui/InputUpload";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { addJob } from "../../services/api/job";

const AddJob = () => {
  const [form] = Form.useForm();
  const [publish, setPublish] = useState(false);
  const { formItems } = useGetDataForAddJob();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["add-job"],
    mutationFn: (Data) => addJob(Data, publish),
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/job-details`);
    },
  });

  return (
    <div className="child-container">
      <Heading>Job Upload</Heading>
      <Form
        form={form}
        className="pt-[40px] !w-full"
        onFinish={(values) => {
          mutate(values);
        }}
      >
        {formItems.map((item, index) => {
          return (
            <div key={index} className="w-full flex" id="add-job">
              <h1 className="text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]">
                {item.label}:
              </h1>
              {item.type === "input" ? (
                <FormInput
                  name={item.id}
                  rules={item.rule}
                  placeholder={item.placeholder}
                  className={
                    "text-[14px] text-[#6D7D93] placeholder:text-[#6D7D93] urbanist-regular"
                  }
                />
              ) : item.type === "select" ? (
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
                    placeholder={item.placeholder}
                  />
                </Form.Item>
              ) : item.type === "textarea" ? (
                <FormTextArea
                  name={item.id}
                  rules={item.rule}
                  placeholder={item.placeholder}
                  className="text-[14px] text-[#6D7D93] placeholder:text-[#6D7D93] urbanist-regular"
                />
              ) : (
                <InputUpload rules={item.rule} name={item.id} />
              )}
            </div>
          );
        })}
        <Form.Item name="scheduled" initialValue={false} noStyle>
          <input type="hidden" />
        </Form.Item>
        <div className="w-full flex mt-[30px] justify-end gap-x-[9px]">
          <Button className="btn-red !h-[46px] w-[150px] flex justify-center">
            Delete
          </Button>
          <Button
            htmlType="submit"
            isLoading={isPending}
            onClick={() => {
              setPublish(true);
            }}
            className="btn-red !h-[46px] w-[150px] !bg-[#1272E5] flex justify-center"
          >
            Add & Publish
          </Button>
          <Button
            htmlType="submit"
            isLoading={isPending}
            className="btn-green !h-[46px] w-[150px] flex justify-center"
          >
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddJob;
