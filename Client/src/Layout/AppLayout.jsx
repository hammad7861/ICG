import { Outlet } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';

const AppLayout = ({ children }) => {
  return (
    <div className='pl-[21px] pr-[35px]    bg-[#EBF0FF]'>
      <Navbar />
      <div className='flex gap-x-[10.35px]   mt-[11px]'>
        <Sidebar />
        {children ? children : <Outlet />}
      </div>
    </div>
  );
};

export default AppLayout;
