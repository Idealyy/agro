import React, { useEffect, useState } from 'react';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from 'axios';
import url from "./../api/api"


const Sante = () => {
  const [animalList, setAnimalList] = useState([]);
  
  const [etat,setEtat]= useState([]);

  useEffect(() => {
    fetchAnimal();
  }, []);

  
  const fetchAnimal = async () => {
    try {
      const animals = await url.get('animals')
      setAnimalList(animals.data);
      console.log(animals.data);
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <div className="w-full p-5 h-screen">
      <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
        <div className="px-4 py-4 w-full">
          <div className="flex max-w-full mb-6">
            <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Etat de santé</h2>
          </div>
          <table className="text-gray-600 font-cabin table-fixed w-full border-collapse bg-white rounded-lg">
            <thead>
              <tr>
                <th className="w-1/4 px-4 py-2 text-center">Nom</th>
                <th className="w-1/4 px-4 py-2 text-center">Etat</th>
                
                <th className="w-1/4 px-4 py-2 text-center">Vaccin</th>
                <th className="w-1/4 px-4 py-2 text-center">Vermifuge</th>
                <th className="w-1/4 px-4 py-2 text-center">Traitement</th>
                
                <th className="w-1/4 px-4 py-2 text-center">Maladie</th>
                <th className="w-1/4 px-4 py-2 text-center">Blessure</th>
                <th className="w-1/4 px-4 py-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
      {animalList.map((item) => (
        <tr key={item.id_animal} className="border-b hover:bg-gray-100 text-center">
          {/* Access animal and health data from a single object */}
          <td className="w-1/4 px-4 py-2">{item.nom}</td>
          <td className="w-1/4 px-4 py-2">{item.etat=="1" ? "En bonne santé" : "En traitement"}</td>
          
          <td className="w-1/4 px-4 py-2">{item.vaccin ? 'Oui' : 'Non'}</td>
          <td className="w-1/4 px-4 py-2">{item.vermifuge ? 'Oui' : 'Non'}</td>
          {/* ... access health data */}
          <td className="w-1/4 px-4 py-2">{item.maladie}</td>
          <td className="w-1/4 px-4 py-2">{item.blessure}</td>
          <td className="w-1/4 px-4 py-2">{item.blessure}</td>
          
          {/* ... rest of the table */}
          <td className="w-14 px-4 py-2">
                          <div className="flex justify-center">
                            <div className="mr-4 hover:text-blue-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">
                              <MdOutlineModeEdit />
                            </div>
                            <div  className='hover:text-red-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer'>
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
  );
};

export default Sante;

