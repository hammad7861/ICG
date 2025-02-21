import { Button, Form, message } from "antd";
import Heading from "../../components/ui/Heading";
import CustomDragger from "../../components/ui/CustomDragger";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddContent from "../../Hooks/ContentDetails/useGetDataForAddContent";
import AntdSelect from "../../components/ui/AntdSelect";
import InputUpload from "../../components/ui/InputUpload";
import FormTextArea from "../../components/ui/FormTextArea";
import FormInputs from "../../components/ui/FormInputs";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { addContent } from "../../services/api/content";
import { useState } from "react";

const AddContent = () => {
  const [form] = Form.useForm();
  const [publish, setPublish] = useState(false);
  const image = Form.useWatch("image", form);
  const { formItems, formItems2 } = useGetDataForAddContent();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["add-article"],
    mutationFn: (Data) => addContent(Data, publish),
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/content-details`);
    },
  });

  return (
    <div className="child-container">
      <Heading>Content Upload</Heading>
      <Form
        form={form}
        className="pt-[40px] !w-full"
        onFinish={(values) => {
          mutate(values);
        }}
        id="add-content"
      >
        <Form.Item name="bannerImage" valuePropName="fileList">
          <CustomDragger form={form} image={image} />
        </Form.Item>
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
                    options={
                      item?.options ?? [
                        {
                          label: "Media",
                          value: "Media",
                        },
                        {
                          label: "News",
                          value: "News",
                        },
                        {
                          label: "Article",
                          value: "Article",
                        },
                        {
                          label: "Blog",
                          value: "Blog",
                        },
                      ]
                    }
                    className={
                      "!bg-transparent  urbanist-regular !border !border-black !mb-[20px] !h-[46px]"
                    }
                    name={item.name}
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
        <Heading className="pb-4">Content & Details</Heading>
        {formItems2.map((item, index) => {
          return (
            <div key={index} className="w-full flex" id="add-job">
              <h1 className="text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]">
                {item.label}:
              </h1>
              <FormInputs item={item} />
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

export default AddContent;
