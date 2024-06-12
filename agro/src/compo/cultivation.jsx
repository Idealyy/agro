import React, { useState, useEffect } from 'react';
import Phase from './phase';
import { RiPlantLine } from 'react-icons/ri';
import { MdOutlineModeEdit } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";


const data = [
  { id: 1, plantation: 'FFF', production: 'GGG', recolte: '...', plante: '...', produit: '...', surface: '...' },
  { id: 2, plantation: 'HHH', production: 'III', recolte: '...', plante: '...', produit: '...', surface: '...' },
  { id: 3, plantation: '...', production: '...', recolte: '...', plante: '...', produit: '...', surface: '...' },
];

const Cultivation = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [cult, setCult] = useState(null);

  useEffect(() => {
    console.log(cult);
  }, [cult]);


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };


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
                        <div className="mr-4 hover:text-blue-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">
                          <MdOutlineModeEdit />
                        </div>
                        <div className='hover:text-red-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer'>
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
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <button
              className="text-gray-600 hover:text-gray-800 float-right mt-0"
              onClick={togglePopup}
            >
              <IoClose />

            </button>
            <div className="">
              <form className='m-2'>
                <label htmlFor="" className='block text-sm font-medium leading-6 text-gray-900'>
                  Date de plantation
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="date"
                  name="type"
                // value={submitData.type} 
                // onChange={handleChange} 
                />

                <label htmlFor="" className='block text-sm font-medium leading-6 text-gray-900'>
                  Date de production
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="date"
                  name="type"
                // value={submitData.type} 
                // onChange={handleChange} 
                />
                <label htmlFor="" className='block text-sm font-medium leading-6 text-gray-900'>
                  Date de recolte
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="date"
                  name="type"
                // value={submitData.type} 
                // onChange={handleChange} 
                />
                <label htmlFor="" className='block text-sm font-medium leading-6 text-gray-900'>
                  Nombre de plante plantés
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="qualite"
                // value={formData.brand} 
                // onChange={handleChange} 
                />
                <label htmlFor="" className='block text-sm font-medium leading-6 text-gray-900'>
                  Produits en kg
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="qualite"
                // value={formData.brand} 
                // onChange={handleChange} 
                />
                <label htmlFor="" className='block text-sm font-medium leading-6 text-gray-900'>
                  Surface
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="qualite"
                // value={formData.brand} 
                // onChange={handleChange} 
                />

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-200 hover:rounded-full  px-3 py-2"
                    onClick={togglePopup}
                  >
                    ANNULER
                  </button>
                  <button
                    type="submit"
                    // onClick={handleSubmit}
                    className="rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    AJOUTER
                  </button>
                </div>
                {/* <button 
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 mt-3 rounded w-full" 
              type="submit"
            > */}
                {/* {editId ? 'Update' : 'Add'} */}
                {/* Submit
            </button> */}
              </form>
            </div>
          </div>

        </div>
      )}
      {/* Affiche le composant "Phase" seulement si un élément est sélectionné */}
      {cult && <Phase cultivation={cult} />}
    </div>
  );
};

export default Cultivation;
