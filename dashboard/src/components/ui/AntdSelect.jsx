import { ConfigProvider, Select } from 'antd';

const AntdSelect = ({
  className,
  options,
  defaultValue,
  placeholder,
  background,
  onChange
}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          activeBorderColor: 'none',
          colorBgContainer: background ?? '#F2FAFF',
          activeOutlineColor: 'none',
          hoverBorderColor: 'none',
          colorText: '#727272',
          colorTextPlaceholder: '#6D7D93',
        },
      }}
    >
      <Select
        options={options}
        style={{
          color: 'red !important',
        }}
        className={`${className} w-full !h-[30px] !placeholder-inherit   !outline-none !focus-within:none !bg-[#F2FAFF;] !rounded-[4.629px]`}
        defaultValue={defaultValue ? defaultValue : undefined}
        placeholder={placeholder}
        onChange={onChange}
        suffixIcon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='8'
            viewBox='0 0 15 8'
            fill='none'
          >
            <path
              d='M14.8199 1.61745C14.8199 1.43092 14.7476 1.25605 14.6147 1.12315C14.3419 0.850353 13.8989 0.850353 13.6261 1.12315L8.52458 6.22467C8.34505 6.40421 8.0909 6.5068 7.8251 6.5068C7.5593 6.5068 7.30516 6.40421 7.12562 6.22467L2.0241 1.12315C1.88887 0.987917 1.70933 0.917969 1.5298 0.917969C1.35027 0.917969 1.17073 0.985585 1.0355 1.12315C0.90027 1.26071 0.830322 1.43092 0.830322 1.61745C0.830322 1.80397 0.902601 1.97884 1.0355 2.11174L6.13703 7.21327C6.58703 7.66327 7.18858 7.91275 7.8251 7.91275C8.46163 7.91275 9.06318 7.66327 9.51318 7.21327L14.6147 2.11174C14.7476 1.97884 14.8199 1.80397 14.8199 1.61745Z'
              fill='#727272'
            />
          </svg>
        }
      />
    </ConfigProvider>
  );
};

export default AntdSelect;
