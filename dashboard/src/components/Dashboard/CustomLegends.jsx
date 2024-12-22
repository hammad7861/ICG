const CustomLegends = () => {
  const options = [
    {
      background: '#2B9999',
      heading: 'In Last 30 Days',
      number: 234,
    },
    {
      background: '#A6CE38',
      heading: 'In Last 90 Days',
      number: 514,
    },
    {
      background: '#E4E9F1',
      heading: 'In Last 9 Months',
      number: 345,
    },
  ];
  return (
    <div className='flex mt-[28px]   pl-[19px] flex-col gap-y-[27px]'>
      {options?.map(({ background, heading, number }) => {
        return (
          <div
            key={heading}
            className=''
          >
            <h1
              style={{
                color: 'rgba(25, 32, 49, 0.40)',
              }}
              className=' whitespace-nowrap'
            >
              {' '}
              {heading}
            </h1>
            <div className='flex gap-x-[11px] mt-[7px] items-center'>
              <div
                style={{
                  background: background,
                }}
                className='h-[13px] w-[13px] rounded-full flex items-center'
              ></div>
              <h2 className='text-[#192031] text-[20px] poppin-semibold leading-normal'>
                {number}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomLegends;
