import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Enregistrement des composants Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const speciesData = {
  Bovin: { vendu: 15, achete: 20, decede: 10, acquis: 50 },
  Porcin: { vendu: 30, achete: 25, decede: 25, acquis: 75 },
  Caprin: { vendu: 10, achete: 12, decede: 5, acquis: 20 },
  Volaille: { vendu: 50, achete: 45, decede: 30, acquis: 10 },
  Ovin: { vendu: 80, achete: 60, decede: 5, acquis: 10 } // Exemple de données pour Ovin
};

const PieChartComponent = ({ species }) => {
  const data = {
    labels: ['Vendu', 'Acheté', 'Décédé', 'Acquis'],
    datasets: [
      {
        data: [
          speciesData[species].vendu,
          speciesData[species].achete,
          speciesData[species].decede,
          speciesData[species].acquis
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }
    ]
  };

  return (
    <div style={{ maxWidth: '200px' }} className='absolute top-0 '>
      <h2>Statistiques pour {species}</h2>
      <Pie data={data} />
    </div>
  );
};

const App = () => {
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [showChart, setShowChart] = useState(false);

  const handleSpeciesChange = (event) => {
    setSelectedSpecies(event.target.value);
    setShowChart(false); // Réinitialise le diagramme lorsque l'espèce est changée
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    setShowChart(true);
  };

  return (


    <div className='flex space-x-10  ml-10 absolute bottom-[170px]  '>
      <div className='py-2'>
        <h1 className='text-gray-700 font-medium'>Sélectionnez une espèce pour afficher les données</h1>
        <form onSubmit={handleButtonClick}>
          <div className="flex flex-col space-y-2">
            <select
              name="espece"
              id="espece"
              value={selectedSpecies}
              onChange={handleSpeciesChange}
              className="border rounded-md  py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              <option value="">Sélectionner une espèce</option>
              <option value="Bovin">Bovin</option>
              <option value="Porcin">Porcin</option>
              <option value="Volaille">Volaille</option>
              <option value="Caprin">Caprin</option>
              <option value="Ovin">Ovin</option>
            </select>
          </div>
          <div className='my-4 mx-10'>
            <button type="submit" className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">AFFICHER</button>
          </div>
        </form>
      </div>
      <div>
        {showChart && selectedSpecies && (
          <PieChartComponent species={selectedSpecies} />
        )}
      </div>
    </div>


  );
};

export default App;
