import { Button as AntButton, ConfigProvider } from 'antd';

const Button = ({
  children,
  className,
  onClick,
  htmlType,
  isLoading,
  style,
  defaultHoverBg,
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverBg,
          },
        },
      }}
    >
      <AntButton
        className={`${className} !focus:bg-none hover:!bg-none !focus-within:bg-none`}
        onClick={onClick}
        loading={isLoading}
        htmlType={htmlType}
        styles={style}
      >
        {children}
      </AntButton>
    </ConfigProvider>
  );
};

export default Button;
