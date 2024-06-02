import React, { useState, useEffect } from 'react';
import Phase from './phase';
import { RiPlantLine } from 'react-icons/ri';

const data = [
  { id: 1, plantation: 'FFF', production: 'GGG', recolte: '...', plante: '...', produit: '...', surface: '...' },
  { id: 2, plantation: 'HHH', production: 'III', recolte: '...', plante: '...', produit: '...', surface: '...' },
  { id: 3, plantation: '...', production: '...', recolte: '...', plante: '...', produit: '...', surface: '...' },
];

const Cultivation = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [cult, setCult] = useState(null);

  useEffect(() => {
    console.log(cult);
  }, [cult]);

  const takeCulture = (item) => {
    setSelectedItemId(item.id); // Définir selectedItemId à item.id
    setCult(item);
  };

  return (
    <div className="h-screen">
      <div className="font-cabin overflow-x-auto rounded-lg shadow-md mx-4 mb-5 ">
        <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg h-50 overflow-y-scroll">
          <div className="px-2 py-4 w-full">
            <div className="flex max-w-full mb-6">
              <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Plantes</h2>
              <div className="mx-2">
                <button className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                  AJOUTER
                </button>
              </div>
            </div>
            <table className="table-fixed w-full border-collapse bg-white rounded-lg text-gray-600">
              <thead>
                <tr>
                  <th className="w-1/8 px-4 py-2 text-center">Phénophase</th>
                  <th className="w-1/8 px-4 py-2 text-center">Plantation</th>
                  <th className="w-1/8 px-4 py-2 text-center">Production</th>
                  <th className="w-1/8 px-4 py-2 text-center">Recolte</th>
                  <th className="w-1/8 px-4 py-2 text-center">Planté</th>
                  <th className="w-1/8 px-4 py-2 text-center">Produit(kg)</th>
                  <th className="w-1/8 px-4 py-2 text-center">Surface</th>
                  <th className="w-1/8 px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={`border-b hover:bg-gray-100 text-center ${selectedItemId === item.id ? 'bg-yellow-200' : ''}`}>
                    <td className="px-4 py-2 flex justify-center cursor-pointer " onClick={() => takeCulture(item)}>
                      <RiPlantLine />
                    </td>
                    <td className="px-4 py-2">{item.plantation}</td>
                    <td className="px-4 py-2">{item.production}</td>
                    <td className="px-4 py-2">{item.recolte}</td>
                    <td className="px-4 py-2">{item.plante}</td>
                    <td className="px-4 py-2">{item.produit}</td>
                    <td className="px-4 py-2">{item.surface}</td>
                    <td className="px-4 py-2">
                      <div className="flex justify-center">
                        {/* Ajoutez d'autres actions ici si nécessaire */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Affiche le composant "Phase" seulement si un élément est sélectionné */}
      {cult && <Phase cultivation={cult} />}
    </div>
  );
};

export default Cultivation;
