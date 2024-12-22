import FormInput from "./FormInput";
import AntdSelect from "./AntdSelect";
import FormTextArea from "./FormTextArea";
import InputUpload from "./InputUpload";
import Switch from "./Switch";
import { Form } from "antd";
import RichTextEditor from "./RichTextEditor";

const FormInputs = ({ item, disabled }) => {
  return (
    <>
      {item.type === "input" ? (
        <FormInput
          name={item.id}
          rules={item.rule}
          placeholder={item.placeholder}
          className={
            "text-[14px] text-[#6D7D93] placeholder:text-[#6D7D93] urbanist-regular"
          }
          disable={disabled}
        />
      ) : item.type === "select" && !disabled ? (
        <Form.Item name={item.id} rules={item.rule} className="w-full">
          <AntdSelect
            background={"#FFF"}
            options={
              item?.options ?? [
                {
                  label: "Option 1",
                  value: "Option",
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
      ) : item.type === "textarea" && !disabled ? (
        <FormTextArea
          name={item.id}
          rules={item.rule}
          placeholder={item.placeholder}
          className="text-[14px] text-[#6D7D93] placeholder:text-[#6D7D93] urbanist-regular"
        />
      ) : item.type === "switch" ? (
        <Form.Item
          name={item.id}
          rules={item.rule}
          valuePropName="checked"
          className="w-full"
        >
          <Switch disabled={disabled} />
        </Form.Item>
      ) : item.type === "richtext" && !disabled ? (
        <div style={{ width: "100%", maxWidth: "100%", overflowX: "hidden" }}>
          <Form.Item name={item.id} rules={item.rule} className="w-full">
            <RichTextEditor
              className="text-[14px]"
              style={{ maxWidth: "100%", overflowX: "hidden" }}
              readOnly={disabled}
            />
          </Form.Item>
        </div>
      ) : !disabled ? (
        <InputUpload rules={item.rule} name={item.id} />
      ) : (
        <FormInput
          name={item.id}
          rules={item.rule}
          placeholder={item.placeholder}
          className={
            "text-[14px] text-[#6D7D93] placeholder:text-[#6D7D93] urbanist-regular"
          }
          disable={disabled}
        />
      )}
    </>
  );
};

export default FormInputs;
