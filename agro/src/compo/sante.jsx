import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const data = [
  { nom: 1, espece: 'Fido', species: 'Dog', age: 5, health: 'Good' },
  { nom: 2, espece: 'Whiskers', species: 'Cat', age: 3, health: 'Fair' },
  { nom: 3, espece: 'Buddy', species: 'Dog', age: 7, health: 'Excellent' },
  { nom: 4, espece: 'Nibbles', species: 'Rabbit', age: 2, health: 'Poor' },
];
const sante = () => {
  return (
    <div>
      <div className=" w-full p-5 h-screen  ">
        <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
          <div className="px-4 py-4 w-full">
            <div className="flex max-w-full mb-6">
              <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Etat de santé</h2>

            </div>
            <table className=" text-gray-600 font-cabin table-fixed w-full border-collapse bg-white rounded-lg">
              <thead>
                <tr>
                  <th className="w-1/4 px-4 py-2 text-center">Nom</th>
                  <th className="w-1/4 px-4 py-2 text-center">Espèce</th>
                  <th className="w-1/4 px-4 py-2 text-center">Etat</th>
                  <th className="w-1/4 px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.nom} className="border-b hover:bg-gray-100 text-center">
                    <td className="w-1/4 px-4 py-2">{item.nom}</td>
                    <td className="w-1/4 px-4 py-2"><Link to="/animal"><span>{item.espece}</span></Link></td>
                    <td className="w-1/4 px-4 py-2">{item.age}</td>
                    <td className="w-14 px-4 py-2">
                      <div className="flex justify-center">
                        <div className="mr-4 hover:text-blue-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                          <MdOutlineModeEdit />
                        </div>
                        <div className='hover:text-red-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 '>
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
  )
}

export default sante
