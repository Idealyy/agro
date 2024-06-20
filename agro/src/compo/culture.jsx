import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const Culture = () => {
  const [dataCulture, setDataCulture] = useState([]);
  const [dataParcelle, setDataParcelle] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [montrePopup, setMontrePopup] = useState(false);
  const [submitData, setSubmitData] = useState({
    type_plante: '',
    variete: '',
    description: '',
    nbr_plante: '',
    latitude: '',
    longitude: '',
    type_sol: '',
    type_culture_avant: '',
    surface: ''
  });

  useEffect(() => {
    fetchDataCulture();
    fetchDataParcelle();
  }, []);

  const fetchDataCulture = () => {
    axios.get('http://localhost:8080/api/agriculture/plante/getAllP')
      .then(response => {
        setDataCulture(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const fetchDataParcelle = () => {
    axios.get('http://localhost:8080/api/agriculture/parcelle/getAll')
      .then(response => {
        setDataParcelle(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const togglePopupParcelle = () => {
    setMontrePopup(!montrePopup);
  };

  const handleChange = (e) => {
    setSubmitData({
      ...submitData,
      [e.target.name]: e.target.value
    });

    console.log(submitData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submit = await axios.post('http://localhost:8080/api/agriculture/plante/addPlante', {
        type_plante: submitData.type_plante,
        variete: submitData.variete,
        description: submitData.description,
        nbr_plante: submitData.nbr_plante
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(submitData.nbr_plante);
      console.log(submit);
      fetchDataCulture(); 
      Swal.fire({
        title: 'ajout effectué',
        
        confirmButtonText: 'ok'
      })// Refresh the data after submission
      togglePopup();
      Swal.fire({
        title: 'ajout effectué',
        
        confirmButtonText: 'ok'
      }) // Close the popup after submission
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitParcel = async (e) => {
    e.preventDefault();
    try {
      const submit = await axios.post('http://localhost:8080/api/agriculture/parcelle/addParcelle', {
        latitude: submitData.latitude,
        longitude: submitData.longitude,
        type_sol: submitData.type_sol,
        type_culture_avant: submitData.type_culture_avant,
        surface: submitData.surface
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(submit);
      fetchDataParcelle(); 
      togglePopupParcelle(); 
    
      Swal.fire({
        title: 'ajout effectué',
        
        confirmButtonText: 'ok'
      })// Close the popup after submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen mt-0">
    
      <div className="font-cabin overflow-x-auto rounded-lg shadow-md mx-4 mb-1">
        <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
          <div className="px-4 py-4 w-full">
            <div className="flex max-w-full mb-6">
              <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Parcelles</h2>
              <button
                onClick={togglePopupParcelle}
                className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none"
              >
                AJOUTER
              </button>
            </div>
            <div className='h-[25vh] overflow-y-scroll'>
              <table className="table-fixed w-full border-collapse bg-white rounded-lg text-gray-600">
                <thead>
                  <tr>
                    <th className="w-1/4 px-4 py-2 text-center">Latitude</th>
                    <th className="w-1/4 px-4 py-2 text-center">Longitude</th>
                    <th className="w-1/4 px-4 py-2 text-center">Préculture</th>
                    <th className="w-1/4 px-4 py-2 text-center">Superficie</th>
                    <th className="w-1/4 px-4 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dataParcelle.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-100 text-center">
                      <td className="w-1/4 px-4 py-2">{item.latitude}</td>
                      <td className="w-1/4 px-4 py-2">{item.longitude}</td>
                      <td className="w-1/4 px-4 py-2">{item.type_culture_avant}</td>
                      <td className="w-1/4 px-4 py-2">{item.surface}</td>
                      <td className="w-14 px-4 py-2">
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
      </div>

      {montrePopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <button
              className="text-gray-600 hover:text-gray-800 float-right mt-0"
              onClick={togglePopupParcelle}
            >
              <IoClose />
            </button>
            <div>
              <form className='m-2' onSubmit={handleSubmitParcel}>
                <label htmlFor="latitude" className='block text-sm font-medium leading-6 text-gray-900'>
                  Latitude
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="latitude"
                  onChange={handleChange}
                />
                <label htmlFor="longitude" className='block text-sm font-medium leading-6 text-gray-900'>
                  Longitude
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="longitude"
                  onChange={handleChange}
                />
                <label htmlFor="type_culture_avant" className='block text-sm font-medium leading-6 text-gray-900'>
                  Préculture
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="type_culture_avant"
                  onChange={handleChange}
                />
                <label htmlFor="type_sol" className='block text-sm font-medium leading-6 text-gray-900'>
                  Type de sol
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="type_sol"
                  onChange={handleChange}
                />
                <label htmlFor="surface" className='block text-sm font-medium leading-6 text-gray-900'>
                  Superficie
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="surface"
                  onChange={handleChange}
                
                />
                 
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-200 hover:rounded-full px-3 py-2"
                    onClick={togglePopupParcelle}
                  >
                    ANNULER
                  </button>
                  <button
                    type="submit"
                    className="rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    AJOUTER
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="font-cabin overflow-x-auto rounded-lg shadow-md mx-4 mb-5">
        <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
          <div className="px-4 py-4 w-full">
            <div className="flex max-w-full mb-6">
              <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Sémences</h2>
              
              <button onClick={togglePopup} className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                AJOUTER
              </button>
            </div>
            <div className='h-[25vh] overflow-y-scroll'>
              <table className="table-fixed w-full border-collapse bg-white rounded-lg text-gray-600">
                <thead>
                  <tr>
                    <th className="w-1/4 px-4 py-2 text-center">Type</th>
                    <th className="w-1/4 px-4 py-2 text-center">Variété</th>
                    <th className="w-1/4 px-4 py-2 text-center">Description</th>
                    <th className="w-1/4 px-4 py-2 text-center">Nombre</th>
                    <th className="w-1/4 px-4 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataCulture.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-100 text-center">
                      <td className="w-1/4 px-4 py-2">{item.type_plante}</td>
                      <td className="w-1/4 px-4 py-2">{item.variete}</td>
                      <td className="w-1/4 px-4 py-2"><span>{item.description}</span></td>
                      <td className="w-1/4 px-4 py-2">{item.nbr_plante}</td>
                      <td className="w-14 px-4 py-2">
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
            <div>
              <form className='m-2' onSubmit={handleSubmit}>
                <label htmlFor="type_plante" className='block text-sm font-medium leading-6 text-gray-900'>
                  Type
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="type_plante"
                  onChange={handleChange}
                />
                <label htmlFor="variete" className='block text-sm font-medium leading-6 text-gray-900'>
                  Variété
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="variete"
                  onChange={handleChange}
                />
                <label htmlFor="description" className='block text-sm font-medium leading-6 text-gray-900'>
                  Description
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="description"
                  onChange={handleChange}
                />
                <label htmlFor="nbr_plante" className='block text-sm font-medium leading-6 text-gray-900'>
                  Nombre
                </label>
                <input
                  className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  type="text"
                  name="nbr_plante"
                  onChange={handleChange}
                />
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-200 hover:rounded-full px-3 py-2"
                    onClick={togglePopup}
                  >
                    ANNULER
                  </button>
                  <button
                    type="submit"
                    className="rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    AJOUTER
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Culture;
