
import { Dropdown, Space } from 'antd';


const CustomDropdown = ({children,items}) => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {children}
      </Space>
    </a>
  </Dropdown>
);

export default CustomDropdown;
