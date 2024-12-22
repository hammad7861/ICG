import { Form, Input } from "antd";

const FormTextArea = ({ name, rules, placeholder, className, disabled }) => {
  return (
    <Form.Item name={name} rules={rules} className="w-full">
      <Input.TextArea
        placeholder={placeholder}
        className={`${className} !outline-none !w-full !focus-within:none !h-[120px] !border-[#062C42] !shadow-none`}
        autoSize={{ minRows: 3, maxRows: 6 }}
        disabled={disabled}
      />
    </Form.Item>
  );
};

export default FormTextArea;
