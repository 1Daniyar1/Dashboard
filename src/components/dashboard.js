import React from 'react';
import { Progress } from 'antd';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  datasets: [
    {
      label: 'Активность',
      backgroundColor: ['#B7EB8F', '#B7EB8F', '#B7EB8F', '#B7EB8F', '#91CAFF', '#0000000F', '#0000000F'],
      barThickness: 6, 
      data: [100, 60, 80, 100, 30, 100, 100],
      borderRadius: 20, // Fully round the bars
      borderSkipped: false, // Ensures the bottom of the bars is rounded too
    },
  ],
};

const options = {
  scales: {
    x: {
      display: true, 
      ticks: {
        color: '#000000A6',
      },
      grid: {
        display: false, 
      },
      border: {
        display: false, 
      },
    },
    y: {
      display: false, 
      grid: {
        display: false, 
      },
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const Dashboard = () => {
  return (
    <div className='bg-custom-gradient pt-8'>
        <div className="max-w-96 mx-5 bg-white shadow-md rounded-3xl p-4">
        {/* Title */}
        <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold font-inter">Успехи и прогресс</h2>
        </div>

        <div className="flex flex-row justify-between">
            {/* Left side: Bar Chart */}
            <div className="flex-1">
            <div className="h-56 w-48">
                <Bar data={data} options={options} />
            </div>
            </div>

            {/* Right side: Circular Progress */}
            <div className="flex flex-col justify-between space-y-3">
            <div className="flex flex-col items-center">
                <Progress type="circle" percent={25} strokeColor="#91CAFF" width={80} />
                <p className="mt-2 text-sm font-inter font-normal text-gray-600">Активность</p>
            </div>
            <div className="flex flex-col items-center">
                <Progress type="circle" percent={40} strokeColor="#91CAFF" format={(percent) => `${percent}/100`} width={80} />
                <p className="mt-2 text-sm font-inter font-normal text-gray-600">Выполнено</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;
