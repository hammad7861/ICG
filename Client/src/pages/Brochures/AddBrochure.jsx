import { Form, message } from "antd";
import Heading from "../../components/ui/Heading";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddBrochure from "../../Hooks/BrochureDetails/useGetDataForAddBrochure";
import AntdSelect from "../../components/ui/AntdSelect";
import InputUpload from "../../components/ui/InputUpload";
import FormTextArea from "../../components/ui/FormTextArea";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addBrochure } from "../../services/api/brochure";
import { useState } from "react";

const AddBrochure = () => {
  const [form] = Form.useForm();
  const [publish, setPublish] = useState(false);
  const { formItems } = useGetDataForAddBrochure();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["add-blog"],
    mutationFn: (Data) => addBrochure(Data, publish),
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/brochure-details`);
    },
  });
  return (
    <div className="child-container">
      <Heading>Brochure Upload</Heading>
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
                <AntdSelect
                  background={"#FFF"}
                  options={[
                    {
                      label: "Option 1",
                      value: "Option",
                    },
                  ]}
                  className={
                    "!bg-transparent  urbanist-regular !border !border-black !mb-[20px] !h-[46px]"
                  }
                  placeholder={item.placeholder}
                />
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

export default AddBrochure;
