
import AreaChart from '../../components/Dashboard/AreaChart';
import Card from '../../components/Dashboard/Card';
import CustomLegends from '../../components/Dashboard/CustomLegends';
import PieChart from '../../components/Dashboard/PieChart';
import AntdTable from '../../components/ui/AntdTable';
import Heading from '../../components/ui/Heading';
import SearchInput from '../../components/ui/SearchInput';
import { cards } from '../../constants';

const Dashboard = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: <span style={{ color: '#7C848D' }}>No</span>,
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: <span style={{ color: '#7C848D' }}>Full Name</span>,
      dataIndex: 'full_name',
      key: 'full_name',
    },
    {
      title:<span style={{ color: '#7C848D' }}> Email</span>,
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: <span style={{ color: '#7C848D' }}>Contact Number</span>,
      dataIndex: 'number',
      key: 'number',
    },
    {
      title:  <span style={{ color: '#7C848D' }}>Product Name</span>,
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title:  <span style={{ color: '#7C848D' }}>Market Name</span>,
      dataIndex: 'marker_name',
      key: 'marker_name',
    },
     {
      title: <span style={{ color: '#7C848D' }}>Company Name</span>,
      dataIndex: 'company_name',
      key: 'company_name',
    },
    {
      title: <span style={{ color: '#7C848D' }}>Status</span>,
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render:()=>{
        return <div className="w-full flex justify-center">
          <div style={{
          background:"rgba(101, 255, 66, 0.20)",
        padding: "3px 20px 3px 22px"
        }} className={`rounded-[30px] w-[75px] text-[#A6CE38] text-[10px] text-center`}>{"hi"}</div>
        </div>
      }
    }
  ];
  return (
    <div className='w-full pb-[30px] h-full'>
      <Heading className={'pl-[5px]'}>Dashboard Overview</Heading>

      <div className='grid grid-cols-3 gap-x-[12.34px] mt-[34px] w-full '>
        <div className='col-span-2'>
          <div className='grid gap-x-[7px] grid-cols-3'>
            {cards.map(({ heading, background, number, percentage }) => {
              return (
                <Card
                  key={heading}
                  heading={heading}
                  background={background}
                  number={number}
                  percentage={percentage}
                />
              );
            })}
          </div>
          <div
            style={{
              background:
                'radial-gradient(158.51% 103.03% at 15.81% 24.77%, #206E6E 0%, #2B9999 100%)',
            }}
            className='h-[218px]   mt-[11px] rounded-[10px]'
          >
            <h1 className='text-[#FFF] pl-[42px] pt-[24px] uppercase text-[16px] leading-[20px] urbanist-medium'>
              Total Requests
            </h1>
            <div className='border mt-[12px] border-[#FFF]'></div>
            <AreaChart/>
          </div>
        </div>
        <div className='col-span-1 h-[345px] overflow-x-auto  bg-[#FFF] pb-[50px] rounded-[10px] w-full pr-[13px]'>
          <h1 className='pl-[19px] pt-[24px] text-[#2D2D2D] urbanist-semibold text-[18px]'>
            Client Requests
          </h1>
          <div className='flex custom-3xl:justify-between'>
            <CustomLegends />
            <PieChart />
          </div>
        </div>
      </div>

      <div className=" bg-[#FFF] mt-[9px] h-auto pl-[27px] pt-[43px] pb-[30px] pr-[30px] rounded-[10px]">
            <h1 className="pl-[8px] text-[22px] text-[] urbanist-semibold">Information of Client</h1>
            <div className="w-full flex justify-end  mb-[20px]">
              <SearchInput placeholder={"Search"} className={"w-[600px]"}/>
            </div>
      <AntdTable
      dataSource={dataSource}
      columns={columns}
      />
      </div>
    </div>
  );
};

export default Dashboard;
