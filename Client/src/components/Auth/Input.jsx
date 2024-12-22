import { Form, Input as AntdInput } from "antd";

const Input = ({ placeholder, name, rules, type }) => {
  if (type === "password") {
    return (
      <Form.Item name={name} rules={rules} className="w-full ">
        <AntdInput.Password
          style={{
            border: "1.077px solid rgba(0, 0, 0, 0.23)",
          }}
          placeholder={placeholder}
          className="h-[65.669px] !placeholder:text-[rgba(0, 0, 0, 0.60)]  !rounded-[4.306px]"
        />
      </Form.Item>
    );
  }
  return (
    <Form.Item name={name} rules={rules} className="w-full ">
      <AntdInput
        style={{
          border: "1.077px solid rgba(0, 0, 0, 0.23)",
        }}
        placeholder={placeholder}
        className="h-[65.669px] !placeholder:text-[rgba(0, 0, 0, 0.60)]  !rounded-[4.306px]"
      />
    </Form.Item>
  );
};

export default Input;
