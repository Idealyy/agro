import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GrowthChart = ({ growthData, animalName }) => {
  const data = {
    labels: growthData.map(dataPoint => `${dataPoint.age} mois`),
    datasets: [
      {
        label: 'Poids (kg)',
        data: growthData.map(dataPoint => dataPoint.weight),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Courbe de croissance de ${animalName}`,
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
      },
    },
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Courbe de croissance de l'animal</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default GrowthChart;
