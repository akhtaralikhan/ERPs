import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

function SalesChart() {
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const datasets = [
    {
      label: 'Profit',
      data: [120, 132, 101, 134, 90, 230],
      borderColor: '#3874ff',
      backgroundColor: 'rgba(56, 116, 255, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Income',
      data: [220, 182, 191, 234, 290, 330],
      borderColor: '#0097eb',
      backgroundColor: 'rgba(0, 151, 235, 0.1)',
      tension: 0.4,
    },
    {
      label: 'Expense',
      data: [150, 232, 201, 154, 190, 330],
      borderColor: '#f39c12',
      backgroundColor: 'rgba(243, 156, 18, 0.1)',
      tension: 0.4,
    }
  ];
  const data = {
    labels,
    datasets
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // let container decide aspect
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#EFF2F6',
        titleColor: '#141824',
        bodyColor: '#141824',
        borderColor: '#CBD0DD',
        borderWidth: 1,
        titleFont: {
          size: 14,
          family: 'Microsoft YaHei',
        },
        bodyFont: {
          size: 14,
          family: 'Microsoft YaHei',
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: false,
        },
      },
      y: {
        type: 'linear',
        title: {
          display: false,
        },
      },
    },
  };

  return (
    <div className='col-4' style={{ height: 320, width: '100%', minWidth: 260 }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default SalesChart;
