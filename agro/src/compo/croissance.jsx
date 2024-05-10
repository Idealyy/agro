import React from 'react';

const Croissance = ({ data, description }) => {
  // Vérifiez si les données sont présentes, sinon utilisez des données factices
  const animalData = data || [
    { age: 1, weight: 10 },
    { age: 2, weight: 20 },
    { age: 3, weight: 30 },
    { age: 4, weight: 40 },
    { age: 5, weight: 50 },
  ];

  // Calcule la hauteur du bar pour chaque point de données
  const maxHeight = Math.max(...animalData.map(item => item.weight));

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4">{description}</p>
      <div className="flex">
        {animalData.map((item, index) => (
          <div key={index} className="flex flex-col items-center mr-4">
            <div
              className="w-8 h-full bg-blue-500 mb-2"
              style={{ height: `${(item.weight / maxHeight) * 10}rem` }} // Ajustez l'échelle ici
            />
            <span className="text-xs">{item.age}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Croissance;