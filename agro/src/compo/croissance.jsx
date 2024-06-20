import React, { useState } from 'react';
import GrowthChart from './GrowthChart';

const Croissance = () => {
  const [name, setName] = useState('');
  const [entries, setEntries] = useState([{ age: '', weight: '' }]);
  const [showChart, setShowChart] = useState(false);

  const handleEntryChange = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  };

  const handleAddEntry = () => {
    setEntries([...entries, { age: '', weight: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des entrées
    if (entries.length < 2) {
      alert('Veuillez ajouter au moins deux paires âge/poids.');
      return;
    }

    if (entries.some(entry => entry.age === '' || entry.weight === '')) {
      alert('Veuillez remplir tous les champs d\'âge et de poids.');
      return;
    }

    console.log('Entries:', entries);
    console.log('Show Chart before setting state:', showChart);
    setShowChart(true);
    console.log('Show Chart after setting state:', showChart);
  };

  return (
    <div className='h-screen flex'>
     <div>
     <h1>Suivi de la croissance de l'animal</h1>
      <form className="w-full max-w-lg mx-auto p-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nom de l'animal
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {entries.map((entry, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`age-${index}`}>
              Âge (mois)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`age-${index}`}
              type="number"
              value={entry.age}
              onChange={(e) => handleEntryChange(index, 'age', e.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`weight-${index}`}>
              Poids (kg)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={`weight-${index}`}
              type="number"
              value={entry.weight}
              onChange={(e) => handleEntryChange(index, 'weight', e.target.value)}
            />
          </div>
        ))}
        <button
          type="button"
          className="bg-slate-500 hover:bg-slate-500  text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  focus:outline-none"
          onClick={handleAddEntry}
        >
          Ajouter une autre paire âge/poids
        </button>
        <div className="flex items-center justify-between mt-4">
          <button
            className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 mx-14 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none"
            type="submit"
          >
            Soumettre
          </button>
        </div>
      </form>
     </div>
      <div>
      {showChart && <GrowthChart growthData={entries} animalName={name} />}
      
      </div>
    </div>
  );
};

export default Croissance;
