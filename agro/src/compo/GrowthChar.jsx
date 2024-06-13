import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GrowthChar = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.age),
    datasets: [
      {
        label: 'Poids (kg)',
        data: data.map(item => item.weight),
        backgroundColor: '#6B7280',
        borderColor: '#AFDED3',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Croissance de l\'animal',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Âge (mois)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Poids (kg)',
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default GrowthChar;
