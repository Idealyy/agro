import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";


const data = [
  { id: 1, name: 'Fido', species: 'Dog', age: 5, health: 'Good' },
  { id: 2, name: 'Whiskers', species: 'Cat', age: 3, health: 'Fair' },
  { id: 3, name: 'Buddy', species: 'Dog', age: 7, health: 'Excellent' },
  { id: 4, name: 'Nibbles', species: 'Rabbit', age: 2, health: 'Poor' },
];

const animal = ({takeAnimal}) => {
  
  const [activeProfil,setactiveProfil] = useState(false);



  return (
    <div className="flex h-screen">
      <div className="w-full p-8 h-screen ">
        {/* tableau */}
        <div className=" font-cabin overflow-x-auto rounded-lg shadow-md">
          <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
            <div className="px-4 py-4 w-full">
              <div className="flex max-w-full mb-6">
                <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Liste des animaux</h2>
                <button className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                  AJOUTER
                </button>
              </div>
              <table className="table-fixed w-full border-collapse bg-white rounded-lg text-gray-600">
                <thead>
                  <tr>
                    <th className="w-1/4 px-4 py-2 text-center">ID</th>
                    <th className="w-1/4 px-4 py-2 text-center">Profile</th>
                    <th className="w-1/4 px-4 py-2 text-center">Nom</th>
                    <th className="w-1/4 px-4 py-2 text-center">Âge</th>
                    <th className="w-1/4 px-4 py-2 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-100 text-center">
                      <td className="w-1/4 px-4 py-2">{item.id}</td>
                      <td className="w-1/4 px-4 py-2">
                      <div className='flex justify-center cursor-pointer' onClick={() => takeAnimal(item)}>
                            <RiDeleteBinLine />
                          </div>
                      </td>
                      <td className="w-1/4 px-4 py-2"><span>{item.name}</span></td>
                      <td className="w-1/4 px-4 py-2">{item.age}</td>
                      <td className="w-14 px-4 py-2">
                        <div className="flex justify-center">
                          <div className="mr-2">
                            <MdOutlineModeEdit />
                          </div>
                          <div>
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

        {/* //diagrame */}
        <div className="flex mt-8">
          <div className="bg-[(#483D31] w-1/2 rounded-lg shadow-md mr-4 hover:scale-105 transition duration-300 ease-out">
            <div className="p-4">
              <h2 className="text-xl font-cabin mb-2">Diagramme 2</h2>
              <p className="text-gray-700 font-cabin">Contenu de la diagrame 1 ici...</p>
            </div>
          </div>
          <div className="bg-[#AFDED3] w-1/2 rounded-lg shadow-md hover:scale-105 transition duration-300 ease-out">
            <div className="p-4">
              <h2 className="text-xl font-cabin mb-2">Diagrame1</h2>
              <p className="text-gray-700 font-cabin">Contenu de la diagrame 2 ici...</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default animal
