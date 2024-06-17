import React, { useState } from 'react';
import axios from 'axios';
import GrowthChart from './GrowthChart'; // Correction du nom du composant importé

const Croissance = ({ onAddData }) => {
  const [name, setName] = useState('');
  const [entries, setEntries] = useState([{ age: '', weight: '' }]);
  const [data, setData] = useState([]); // Initialisation de l'état `data` comme tableau vide

  const handleAddEntry = () => {
    setEntries([...entries, { age: '', weight: '' }]);
  };

  const handleEntryChange = (index, field, value) => {
    const newEntries = [...entries];
    newEntries[index][field] = value;
    setEntries(newEntries);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (entries.length < 2) {
        alert("Veuillez ajouter au moins deux paires âge/poids.");
        return;
    }

    const validEntries = entries.map(entry => ({
        age: parseFloat(entry.age),
        weight: parseFloat(entry.weight)
    }));

    for (const entry of validEntries) {
        if (isNaN(entry.age) || isNaN(entry.weight)) {
            alert("Veuillez entrer des valeurs numériques valides pour l'âge et le poids.");
            return;
        }
    }

    const requestData = {
        a: validEntries[0].age,
        b: validEntries[0].weight,
        c: validEntries[1].age,
        d: validEntries[1].weight,
    };

    try {
        const response = await axios.post('http://localhost:8080/api/elevage/animal/diagC', requestData);

        if (response.status === 200) {
            onAddData(response.data);
            setData(response.data); // Update `data` state with API response
        } else {
            console.error(`Unexpected response status: ${response.status}`);
        }
    } catch (error) {
        if (error.response) {
            console.error(`Server responded with status: ${error.response.status}`, error.response.data);
        } else if (error.request) {
            console.error('No response received from server', error.request);
        } else {
            console.error('Error setting up the request', error.message);
        }
    }
};

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
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
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleAddEntry}
          >
            Ajouter une autre paire âge/poids
          </button>
          <div className="flex items-center justify-between mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
      <div className="w-full mt-8">
        {data.length > 0 && <GrowthChart data={data} />} {/* Vérification si `data` est un tableau non vide avant de rendre le composant */}
      </div>
    </div>
  );
};

export default Croissance;
