import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const chartData = {
    series: [234, 514, 345],
    options: {
      responsive: [
        
        {
          breakpoint: 1467,
          options: {
            chart: {
              width: '229px', // Fixed width
              height: '229px', // Fixed height
            },
          },
        },
        {
          breakpoint: 1468, // Ensure the chart does not change its size for any screen size
          options: {
            chart: {
              width: '429px', // Fixed width
              height: '429px', // Fixed height
            },
          },
        },
      ],
      chart: {
        type: 'donut',
        width: '429px', // Fixed width
        height: '429px', // Fixed height
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      colors: ['#A6CE38', '#4197FF', '#FF4D40'],
    },
  };

  return (
    <div
      id='app'
      className='col-span-1'
      style={{ position: 'relative', height: '429px' }} // Fixed container size
    >
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type='donut'
        height='429px' // Fixed height
        width='250px' // Fixed width
      />
      {/* Overlay custom HTML */}
      <div
        style={{
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '20px',
          background: '#FFF',
          filter: 'drop-shadow(0px 3.859px 64.171px rgba(0, 0, 0, 0.11))',
        }}
        className='h-[123px] max-custom-3xl:left-[50%] max-custom-3xl:top-[26.8%] custom-3xl:top-[125px] custom-3xl:left-[125px]  w-[123px] rounded-full flex items-center justify-center'
      >
        <div className=''>
          <h1 className='text-[#192031] text-[26.073px] font-semibold'>
            1.135
          </h1>
          <p
            style={{
              color: 'rgba(25, 32, 49, 0.40)',
            }}
            className='text-[16px] text-['
          >
            Total
          </p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
