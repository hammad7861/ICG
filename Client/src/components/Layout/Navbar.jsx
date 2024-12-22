import Bell from '../../assets/svgs/Bell';
import Logo from '../../assets/svgs/Logo';
import Query from '../../assets/svgs/Query';
import CustomDropdown from '../ui/CustomDropdown';
import DummyProfile from '../../assets/icons/dummyProfile.png';
import ArrowDown from '../../assets/svgs/ArrowDown';
const Navbar = () => {
  const items = [
    {
      key: '1',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'
        >
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ];

  return (
    <nav className='w-full pt-[19px] pl-[18px] flex items-center justify-between'>
      <div className='flex gap-x-[12px] items-center'>
        <Logo />
        <h1 className='text-[#041925] text-[26px] leading-[-1.543px] inter-semibold'>
          <span className='text-[#A6CE3A] '>ICG</span> Chemicals
        </h1>
      </div>
      <div className='flex gap-x-[19px] items-center'>
        <Bell />
        <Query />
        <CustomDropdown items={items}>
          <div
            style={{
              padding: '3.757px 9.395px 3.758px 3.758px',
            }}
            className='bg-[#FFF] cursor-pointer rounded-[93px] flex gap-x-[9px] items-center'
          >
            <img
              src={DummyProfile}
              alt=''
              className='w-[28.182px] h-[28.182px] rounded-full'
            />
            <ArrowDown />
          </div>
        </CustomDropdown>
      </div>
    </nav>
  );
};

export default Navbar;
