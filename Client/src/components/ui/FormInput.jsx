import { Form, Input } from 'antd';

const FormInput = ({
  name,
  rules,
  placeholder,
  className,
  disable = false,
}) => {
  return (
    <Form.Item
      name={name}
      rules={rules}
      className='w-full'
    >
      <Input
        placeholder={placeholder}
        disabled={disable}
        className={`${className}  !outline-none !w-full !focus-within:none !h-[46px] ${
          disable
            ? name === 'eventStatus'
              ? '!bg-[#D7FFB8] !border-none'
              : '!bg-[#FFF] !border-none'
            : '!border-[#062C42]'
        }  !shadow-none `}
      />
    </Form.Item>
  );
};

export default FormInput;
