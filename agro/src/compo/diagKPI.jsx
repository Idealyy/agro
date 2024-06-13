import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DiagKPI = ({ id_produit, type_produit, especef, mois }) => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/elevage/production/diagKPI', {
          params: {
            id_produit,
            type_produit,
            especef,
            mois
          }
        });
        const data = response.data;

        const months = data.map(item => item.mois);
        const kpiValues = data.map(item => item.kpi);

        setChartData({
          labels: months,
          datasets: [
            {
              label: 'KPI du Produit',
              data: kpiValues,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });

        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id_produit, type_produit, especef, mois]);

  return (
    <div>
      {loading ? (
        <p>Chargement des données...</p>
      ) : (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'KPI du Produit par Mois',
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default DiagKPI;
