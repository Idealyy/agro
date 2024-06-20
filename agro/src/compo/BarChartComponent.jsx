import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Poulet entier', 'Fromage de chèvre', 'Lait de vache',  'oeufs','porc'],
  datasets: [
    {
      label: 'Quantité (kg/litre)',
      backgroundColor: '#4BC0C0',
      borderColor: '#36A2EB',
      borderWidth: 1,
      hoverBackgroundColor: '#55D8FE',
      hoverBorderColor: '#36A2EB',
      data: [120, 30, 450, 20, 250, 180,] // Remplacez ces données par les quantités réelles
    }
  ]
};

const BarChartComponent = () => (
  <div style={{ maxWidth: '600px', margin: '0 auto' }}>
    
    <Bar
      data={data}
      options={{
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }}
    />
  </div>
);

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Diagramme en barres des quantités de produits</h1>
      <BarChartComponent />
    </div>
  );
};

export default App;
