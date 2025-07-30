import React from 'react';
import ProgressBar from './ProgressBar';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = new Array(getDaysInCurrentMonth()).fill(null).map((_, index) => index + 1);

const data = {
  labels,
  datasets: [
    {
      label: 'Executions',
      data: labels.slice(0, getDayInMonth()).map(() => faker.number.int({ min: 0, max: 10 })),
      borderColor: '#A03291',
      backgroundColor: '#A03291',
      strokeColor: "#A03291",
      pointColor: "#A03291",
      yAxisID: 'y',
      borderWidth: 2,
    },
    {
      label: 'Data',
      data: labels.slice(0, getDayInMonth()).map(() => faker.number.int({ min: 1, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      lineColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
      borderWidth: 2,
    },
  ],
};

function getDayInMonth() {
  const currentDate = new Date();
  const dayInMonth = currentDate.getDate();
  return dayInMonth;
}

function getDaysInCurrentMonth() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; 
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  return lastDayOfMonth;
}

export default function UsageChart() {
  return (
    <>
      <div>
        <div className='grid grid-cols-2'>
          <div className='flex flex-inline items-center gap-x-1'>
            <h1 className="flex-0 text-md text-gray-700 font-semibold">Executions</h1>
            <div className="flex-1 items-start">
              <div className="w-2 h-2 rounded-full bg-boomi-purple"></div>
            </div>
            <div className='flex-0 pr-4'>
              <div className="text-xs text-gray-900 font-normal">~0/1000 (0% used)</div>
            </div>
          </div>
          <div className='flex flex-inline items-center gap-x-1'>
            <h1 className="flex-0 text-md text-gray-700 font-semibold">Data Usage</h1>
            <div className="flex-1 items-start">
              <div className="w-2 h-2 rounded-full bg-boomi-chart-blue"></div>
            </div>
            <div className='flex-0 pr-12'>
              <div className="text-xs text-gray-900 font-normal">~0/250mb (0% used)</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <ProgressBar bgColor='bg-gray-300' fgColor='bg-boomi-purple' height='h-2' progress='45%' opacity='bg-opacity-60' />
          <ProgressBar bgColor='bg-gray-300' fgColor='bg-boomi-chart-blue' height='h-2' progress='75%' opacity='bg-opacity-50' />
        </div>
        <div className="w-full">
          <Line options={options} data={data} height={60} />
        </div>
      </div>
    </>
  );
}
