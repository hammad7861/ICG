import { Switch as AntdSwitch, ConfigProvider } from "antd";

const Switch = ({ onChange, checked, disabled }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Switch: {
            handleBg: "#FFF",
            handleShadow: "#FFF",
            colorPrimary: "#A6CE38",
            colorPrimaryHover: "#A6CE38",
            colorTextQuaternary: "#DEFFD6",
            colorTextTertiary: "#DEFFD6",
          },
        },
      }}
    >
      <AntdSwitch defaultChecked={checked} onChange={onChange} disabled={disabled} />
    </ConfigProvider>
  );
};

export default Switch;
