import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Espece = () => {
  const data = {
    labels: ['Vendu', 'Acheté', 'Acquis', 'Décédé'],
    datasets: [
      {
        label: 'Nombre d\'espèces',
        data: [12, 19, 3, 5], // Remplacez ces valeurs par les valeurs réelles
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
            position: 'right',
            labels: {
                color: 'white',
                font: {
                    size: 14
                },
                generateLabels: (chart) => {
                    const data = chart.data;
                    return data.labels.map((label, i) => ({
                        text: `${label}: ${data.datasets[0].data[i]}`,
                        fillStyle: data.datasets[0].backgroundColor[i],
                        strokeStyle: data.datasets[0].borderColor[i],
                        lineWidth: data.datasets[0].borderWidth,
                    }));
                }
            },
        },
        tooltip: {
            titleColor: 'white',
            bodyColor: 'white',
        },
    },
  };

  return (
    <div>
      <h2>Répartition des Espèces</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default Espece;
