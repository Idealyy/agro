import React, { useState, useEffect } from 'react';
import Phase from './phase';  // Vérifiez que le chemin est correct
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoEye } from "react-icons/go";

const Cultivation = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [cultivations, setCultivations] = useState([]);
  const [newCultivation, setNewCultivation] = useState({
    date_plantation: '',
    date_production: '',
    date_recolte: '',
    nb_planter: '',
    produit_kg: '',
    surface_c: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/agriculture/culture/getAllC');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCultivations(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const takeCulture = (item) => {
    setSelectedItemId(item.id);
  };

  const handleChange = (e) => {
    setNewCultivation({
      ...newCultivation,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/agriculture/culture/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCultivation)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCultivations([...cultivations, data]);
      togglePopup();
    } catch (error) {
      console.error('Error adding cultivation:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/agriculture/culture/delete/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setCultivations(cultivations.filter(cultivation => cultivation.id !== id));
    } catch (error) {
      console.error('Error deleting cultivation:', error);
    }
  };

  return (
    <div className="h-screen">
      <div className="font-cabin overflow-x-auto rounded-lg shadow-md mx-4 mb-5">
        <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg h-50 overflow-y-scroll">
          <div className="px-2 py-4 w-full">
            <div className="flex max-w-full mb-6">
              <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Culture</h2>
              <div className="mx-2">
                <button onClick={togglePopup} className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
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
                  <th className="w-1/8 px-4 py-2 text-center text-[#6ea3d8]">Produit(kg)</th>
                  <th className="w-1/8 px-4 py-2 text-center">Surface</th>
                  <th className="w-1/8 px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cultivations.map((item, index) => (
                  <tr key={index} className={`border-b hover:bg-gray-100 text-center `}>
                    <td className="px-4 py-2 flex justify-center cursor-pointer" onClick={() => takeCulture(item)}>
                     {}
                    </td>
                    <td className="px-4 py-2">{item.date_plantation}</td>
                    <td className="px-4 py-2">{item.date_production}</td>
                    <td className="px-4 py-2">{item.date_recolte}</td>
                    <td className="px-4 py-2">{item.nb_planter}</td>
                    <td className="px-4 py-2">{item.produit_kg}</td>
                    <td className="px-4 py-2">{item.surface_c}</td>
                    <td className="px-4 py-2">
                      <div className="flex justify-center">
                        <div className="mr-4 hover:text-blue-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">
                          <MdOutlineModeEdit />
                        </div>
                        <div onClick={() => handleDelete(item.id)} className='hover:text-red-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer'>
                          <RiDeleteBinLine />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-cabin text-gray-600 mb-4">Ajouter une nouvelle culture</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date_plantation">Date de plantation</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date_plantation" name="date_plantation" type="date" value={newCultivation.date_plantation} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date_production">Date de production</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date_production" name="date_production" type="date" value={newCultivation.date_production} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date_recolte">Date de récolte</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date_recolte" name="date_recolte" type="date" value={newCultivation.date_recolte} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nb_planter">Nombre planté</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nb_planter" name="nb_planter" type="number" value={newCultivation.nb_planter} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="produit_kg">Produit (kg)</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="produit_kg" name="produit_kg" type="number" value={newCultivation.produit_kg} onChange={handleChange} />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surface_c">Surface</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="surface_c" name="surface_c" type="number" value={newCultivation.surface_c} onChange={handleChange} />
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-[#6ea3d8] hover:bg-[#5b8bc2] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Ajouter
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={togglePopup}>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {selectedItemId && (
        <Phase cultivation={cultivations.find(item => item.id === selectedItemId)} />
      )}
    </div>
  );
};

export default Cultivation;
