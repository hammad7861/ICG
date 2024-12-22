import { Form } from "antd";
import Heading from "../../components/ui/Heading";
import CustomDragger from "../../components/ui/CustomDragger";
import FormInput from "../../components/ui/FormInput";
import useGetDataForAddUser from "../../Hooks/UserDetails/useGetDataForAddUser";
import AntdSelect from "../../components/ui/AntdSelect";
import InputUpload from "../../components/ui/InputUpload";
import FormTextArea from "../../components/ui/FormTextArea";

const AddUser = () => {
  const [form] = Form.useForm();
  const image = Form.useWatch("image", form);
  const { formItems } = useGetDataForAddUser();

  return (
    <div className="child-container">
      <Heading>Users</Heading>
      <Form form={form} className="pt-[40px] !w-full">
        <Form.Item name="image" valuePropName="fileList">
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
                <AntdSelect
                  background={"#FFF"}
                  options={[{}]}
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
      </Form>
    </div>
  );
};

export default AddUser;
