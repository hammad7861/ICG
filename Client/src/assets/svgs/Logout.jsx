const Logout = ({ active }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='21'
      viewBox='0 0 21 21'
      fill='none'
    >
      <path
        d='M13.016 5.38948V4.45648C13.016 2.42148 11.366 0.771484 9.33097 0.771484H4.45597C2.42197 0.771484 0.771973 2.42148 0.771973 4.45648V15.5865C0.771973 17.6215 2.42197 19.2715 4.45597 19.2715H9.34097C11.37 19.2715 13.016 17.6265 13.016 15.5975V14.6545'
        stroke={active ? 'white' : '#6D7D93'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.8094 10.0215H7.76843'
        stroke={active ? 'white' : '#6D7D93'}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.8812 7.10645L19.8092 10.0214L16.8812 12.9374'
        stroke='#6D7D93'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default Logout;
