const Heading = ({ children, className }) => {
  return (
    <h1
      className={`${className} urbanist-semibold text-[2rem] leading-[47px] text-[#041925]`}
    >
      {children}
    </h1>
  );
};

export default Heading;
