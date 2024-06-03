import React from 'react'
import { FaSearch } from "react-icons/fa";
import axios from 'axios'
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";



import { Link } from 'react-router-dom';

const data = [
  { id: 1, name: 'Fido', species: 'Dog', age: 5, health: 'Good' },
  { id: 2, name: 'Whiskers', species: 'Cat', age: 3, health: 'Fair' },
  { id: 3, name: 'Buddy', species: 'Dog', age: 7, health: 'Excellent' },
];

const donne = [
  { id: 1, name: 'Fido', species: 'Dog', age: 5, health: 'Good' },
  { id: 2, name: 'Whiskers', species: 'Cat', age: 3, health: 'Fair' },
  { id: 3, name: 'Buddy', species: 'Dog', age: 7, health: 'Excellent' },
];

const fetch = () => {
  axios.get('http://localhost:8080/api/agriculture/parcelle/getAll')
    .then(res => {
      console.log(res.data);
    })
}

const culture = () => {
  return (
    <div className="h-screen">
      <div className=" font-cabin overflow-x-auto rounded-lg shadow-md mx-4 mb-5">
        <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
          <div className="px-4 py-4 w-full">
            <div className="flex max-w-full mb-6">
              <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">
                Plantes
              </h2>
              <div className=' mx-2'>
                <button className="Btn">
                  <div className="sign">
                    <FaSearch />
                  </div>
                  <div className="text text-sm">rechercher⠀plante</div>
                </button>

              </div>
              <button className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                AJOUTER
              </button>
            </div>
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
                {data.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-100 text-center">
                    <td className="w-1/4 px-4 py-2">{item.id}</td>
                    <td className="w-1/4 px-4 py-2">
                      {/* <div className='flex justify-center cursor-pointer' onClick={() => takeAnimal(item)}>
                            <RiDeleteBinLine />
                          </div> */}
                    </td>
                    <td className="w-1/4 px-4 py-2"><span>{item.name}</span></td>
                    <td className="w-1/4 px-4 py-2">{item.age}</td>
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

      <div className=" font-cabin overflow-x-auto rounded-lg shadow-md mx-4">
        <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
          <div className="px-4 py-4 w-full">
            <div className="flex max-w-full mb-6 mx-4">
              <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">
                Parcelles
              </h2>
              <button className="bg-[#FBB6A6] text-white text-xs font-cabin px-4 py-2 rounded-l-full transition duration-200 ease-in-out hover:-translate-y-1  hover:bg-[#6ea3d8] focus:outline-none">
                Tout
              </button>
              <button className="bg-[#FBB6A6] text-white text-xs font-cabin px-4 py-2  transition duration-200 ease-in-out  hover:-translate-y-1 hover:bg-[#6ea3d8] focus:outline-none">
                Plantée
              </button>
              <button className="bg-[#FBB6A6] text-white text-xs font-cabin px-4 py-2 rounded-r-full transition duration-200 ease-in-out hover:-translate-y-1 hover:bg-[#6ea3d8] focus:outline-none">
                Dispo
              </button>
              <button onClick={() => fetch()} className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 mx-4 rounded-full transition duration-200 ease-in-out hover:-translate-y-1  hover:bg-[#6ea3d8] focus:outline-none">
                AJOUTER
              </button>
            </div>
            <table className="table-fixed w-full border-collapse bg-white rounded-lg text-gray-600">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2 text-center">Référence</th>
                  <th className="w-1/4 px-4 py-2 text-center">Latitude</th>
                  <th className="w-1/4 px-4 py-2 text-center">Longitude</th>
                  <th className="w-1/4 px-4 py-2 text-center">Surface</th>
                  <th className="w-1/4 px-4 py-2 text-center">Type sol</th>
                  <th className="w-1/4 px-4 py-2 text-center">Préculture</th>
                  <th className="w-1/4 px-4 py-2 text-center">Action</th>


                </tr>
              </thead>
              <tbody>
                {donne.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-100 text-center">
                    <td className="w-1/4 px-4 py-2">{item.id}</td>
                    <td className="w-1/4 px-4 py-2">
                      {/* <div className='flex justify-center cursor-pointer' onClick={() => takeAnimal(item)}>
                            <RiDeleteBinLine />
                          </div> */}
                    </td>
                    <td className="w-1/4 px-4 py-2"><span>{item.name}</span></td>
                    <td className="w-1/4 px-4 py-2">{item.age}</td>
                    <td className="w-1/4 px-4 py-2">{item.age}</td>
                    <td className="w-1/4 px-4 py-2">{item.age}</td>

                    <td className="w-14 px-4 py-2">
                      <div className="flex justify-center">
                        <div className="mr-4 hover:text-blue-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">
                          <MdOutlineModeEdit />
                        </div>
                        <div className='hover:text-red-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer '>
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
  );
}

export default culture
