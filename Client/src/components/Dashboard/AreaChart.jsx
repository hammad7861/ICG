import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const generateDayWiseTimeSeries = (baseval, count, range) => {
    const series = [];
    let x = baseval;
    for (let i = 0; i < count; i++) {
      const y =
        Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      series.push({ x, y });
      x += 86400000; // Increment date by 1 day
    }
    return series;
  };

  const chartData = {
    series: [
      {
        name: "South",
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          { min: 10, max: 60 }
        ),
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        stacked: false,
        background: "transparent", // Make the background transparent so the SVG is visible
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.38, 
          opacityTo: 0.00, 
          stops: [0, 90, 100],
          colors: ['rgba(255, 255, 255, 0.17)'],
        },
      },
      legend: {
        position: "bottom",
        horizontalAlign: "right",
      },
      xaxis: {
        labels: {
          show: false, 
        },
        axisBorder: {
          show: false, 
        },
        axisTicks: {
          show: false, 
        },
        padding: {
          left: 0,
          right: 0,
        },
      },
      yaxis: {
        labels: {
          show: false, // Hide y-axis labels
        },
      },
      grid: {
        show: false, // Disable grid lines (removes horizontal lines)
      },
    },
  };

  return (
    <div className="area w-full h-[160px] relative" id="" style={{ position: 'relative', width: '100%' }}>
      
      <div className="w-full"
      style={{ padding: 0,marginLeft:"-15px" }}
      id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={190}
          width={"100%"}
        />
      </div>
      <div className="text-[#FFF] absolute top-1/4 left-[40%] top-0 text-[54px] inter-regular">1,059</div>
    </div>
  );
};

export default AreaChart;
