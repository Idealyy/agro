import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Espece = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Remplacez cette URL par celle de votre API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/elevage/animal/diagAni/{{espece}}');
        const data = response.data;

        // Assurez-vous que les données sont au format attendu
        const transformedData = {
          labels: ['Acheté', 'Vendu', 'Acquis', 'Décédé'],
          datasets: [
            {
              label: 'Nombre d\'espèces',
              data: data, // Assurez-vous que 'data' est un tableau de valeurs numériques
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(255, 99, 132, 0.6)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1,
            },
          ],
        };

        setChartData(transformedData);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: 'Nombre d\'espèces par catégorie',
      },
    },
  };

  return chartData ? <Pie data={chartData} options={options} /> : <p>Chargement des données...</p>;
};

export default Espece;
