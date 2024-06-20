import React, { useState, useEffect } from 'react';
import Phase from './phase'; // Assurez-vous que le chemin est correct
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Cultivation = () => {
  const [typesDeSol, setTypesDeSol] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [cultivations, setCultivations] = useState([]);
  const [newCultivation, setNewCultivation] = useState({
    code_parcelle: '',
    id_plante: '',
    date_plantation: '',
    date_production: '',
    nb_planter: '',
    surface_c: ''
  });
  const [semences, setSemences] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedValues, setEditedValues] = useState({});

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
        console.error('Error fetching cultivation data:', error);
      }
    };

    const fetchSemence = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/agriculture/plante/getIdType');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSemences(data); // Met à jour l'état avec les données récupérées de l'API
      } catch (error) {
        console.error('Error fetching seed data:', error);
      }
    };

    fetchData(); // Appel à la fonction fetchData pour récupérer les données de culture
    fetchSemence(); // Appel à la fonction fetchSemence pour récupérer les données de semence

    fetch('http://localhost:8080/api/agriculture/parcelle/getCodeType')
      .then(response => response.json())
      .then(data => {
        setTypesDeSol(data); // suppose que setTypesDeSol est une fonction de mise à jour de l'état
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des types de sol:', error);
      });
  }, []); // le tableau vide [] en tant que deuxième argument pour exécuter une seule fois au montage

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
    console.log(JSON.stringify(newCultivation, null, 2)); // For debugging
    toast.success('Formulaire soumis avec succès!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });

    try {
      const response = await fetch('http://localhost:8080/api/agriculture/culture/addCulture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCultivation, null, 2)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCultivations([...cultivations, data]);
      togglePopup(); // Close popup if successful
    } catch (error) {
      console.error('Error adding cultivation:', error);
      togglePopup();
      Swal.fire({
        title: 'ajout effectué',
        confirmButtonText: 'ok'
      });
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

  const handleDoubleClick = (item, field) => {
    setEditingItemId(item.id);
    setEditedValues({ ...editedValues, [field]: item[field] });
  };

  const handleInputChange = (e, field) => {
    setEditedValues({ ...editedValues, [field]: e.target.value });
  };

  const handleSaveEdit = async (item) => {
    try {
      const response = await fetch(`http://localhost:8080/api/agriculture/culture/doRecolte/${item.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedValues)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedItem = await response.json();
      setCultivations(cultivations.map(cultivation =>
        cultivation.id === item.id ? updatedItem : cultivation
      ));
      setEditingItemId(null);
      setEditedValues({});
    } catch (error) {
      console.error('Error updating cultivation:', error);
    }
  };

  return (
    <div className="h-screen">
      <div className="font-cabin rounded-lg shadow-md mx-4 mb-5">
        <div className="max-w-full max-h-96 bg-white overflow-hidden shadow-md rounded-lg">
          <div className="px-2 py-4 w-full">
            <div className="flex max-w-full mb-6">
              <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Culture</h2>
              <div className="mx-2">
                <button onClick={togglePopup} className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                  AJOUTER
                </button>
              </div>
            </div>
            <div className='h-72 overflow-y-scroll'>
              <table className="table-fixed w-full border-collapse bg-white rounded-lg text-gray-600">
                <thead>
                  <tr>
                    <th className="w-1/8 px-4 py-2 text-center">Plantation</th>
                    <th className="w-1/8 px-4 py-2 text-center">Production</th>
                    <th className="w-1/8 px-4 py-2 text-center">Récolte</th>
                    <th className="w-1/8 px-4 py-2 text-center">Planté</th>
                    <th className="w-1/8 px-4 py-2 text-center text-[#6ea3d8]">Produit(kg)</th>
                    <th className="w-1/8 px-4 py-2 text-center">Surface</th>
                    <th className="w-1/8 px-4 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cultivations.map((item, index) => (
                    <tr key={index} className={`border-b hover:bg-gray-100 text-center`}>
                      
                      {["date_plantation", "date_production", "date_recolte", "nb_planter", "produit_kg", "surface_c"].map((field, idx) => (
                        <td
                          key={idx}
                          className="px-4 py-2 cursor-pointer max-w-10"
                          onDoubleClick={() => handleDoubleClick(item, field)}
                        >
                          {editingItemId === item.id && editedValues[field] !== undefined ? (
                            <input
                              className='w-20'
                              type="text"
                              value={editedValues[field]}
                              onChange={(e) => handleInputChange(e, field)}
                              autoFocus
                            />
                          ) : (
                            item[field]
                          )}
                        </td>
                      ))}
                      <td className="px-4 py-2">
                        <div className="flex justify-center">
                          <div
                            className="mr-4 hover:text-blue-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
                            onClick={() => handleSaveEdit(item)}
                          >
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
                <label htmlFor="species" className="block text-sm font-medium leading-6 text-gray-900">
                  Type de sol
                </label>
                <div className="">
                  <select
                    name="code_parcelle"
                    id="code_parcelle"
                    onChange={handleChange}
                    autoComplete="species-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {typesDeSol.map(item => (
                      <option key={item.code_parcelle} value={item.code_parcelle}>
                        {item.type_sol}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="species" className="block text-sm font-medium leading-6 text-gray-900">
                  Sémence
                </label>
                <div className="">
                  <select
                    name="id_plante"
                    id="id_plante"
                    onChange={handleChange}
                    autoComplete="species-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {semences.map(semence => (
                      <option key={semence.id_plante} value={semence.id_plante}>
                        {semence.type_plante}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nb_planter">Nombre planté</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nb_planter" name="nb_planter" type="number" value={newCultivation.nb_planter} onChange={handleChange} />
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
