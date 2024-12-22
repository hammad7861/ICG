const Card = ({ heading, background, number,percentage }) => {
  return (
    <div
      style={{
        background,
      }}
      className='col-span-1 pb-[8.5px] rounded-[10px] h-full pt-[10px]'
    >
      <h1 className=' pl-[14px] uppercase text-[#FFF]  truncate-[0.5px]  urbanist-medium leading-[20px] text-[16px]'>
        {heading}
      </h1>
      <div className='border mt-[8px] border-[rgba(255, 255, 255, 0.34)]'></div>
      <h1 className='mt-[9px] text-[26px] text-[#FFF] inter-regular w-full text-center'>
        {number}
      </h1>
      <p className='text-[#F4F4F4] mt-[3.85px] inter-regular w-full text-center leading-[13.069px]'>
        {percentage}
      </p>
    </div>
  );
};

export default Card;
