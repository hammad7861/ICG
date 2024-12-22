import { Button, Form, message } from "antd";
import Heading from "../../components/ui/Heading";
import CustomDragger from "../../components/ui/CustomDragger";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddEvent from "../../Hooks/EventDetails/useGetDataForAddEvent";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../../services/api/event";
import FormInputs from "../../components/ui/FormInputs";

const AddEvent = () => {
  const [form] = Form.useForm();
  const image = Form.useWatch("image", form);
  const { formItems, formItems2, validationRule } = useGetDataForAddEvent();
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["add-event"],
    mutationFn: (Data) => {
      addEvent(Data);
    },
    onSuccess: (Data) => {
      message.success(Data.message);
      navigate(`/event-details`);
    },
  });

  return (
    <div className="child-container">
      <Heading>Event Upload</Heading>
      <Form
        form={form}
        className="pt-[40px] !w-full"
        onFinish={(values) => {
          mutate(values);
        }}
        id="add-product"
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
              <FormInputs item={item} />
            </div>
          );
        })}
        {
          <div className="w-full flex" id="add-job">
            <h1 className="text-[24px] font-medium  flex items-center w-[400px] col-span-1 text-[#023B3B] h-[46px]">
              Event Dates:
            </h1>
            <div className="flex items-center w-full gap-x-[14px]">
              <FormInput
                name="startDate"
                id="startDate"
                placeholder="Start Date"
                rules={validationRule}
              />
              <FormInput
                name="endDate"
                id="endDate"
                placeholder="End Date"
                rules={validationRule}
              />
            </div>
          </div>
        }
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
            className="btn-green !h-[46px] w-[150px] flex justify-center"
          >
            Add
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddEvent;
