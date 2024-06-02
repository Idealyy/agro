import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const data = [
    { name: 'Lait', espece: 'bovin', age: 5, q: 'bon' },
    { name: 'fromage', espece: 'bovin', age: 25, q: 'bon' },
    { name: ' œufs', espece: 'volaille', age: 40, q: 'bon' },
];

const Production = () => {
    return (
        <div className="inline h-screen">
            <div className="overflow-x-auto rounded-lg shadow-md mx-4 transform translate-y-5 mb-4 ">
                <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
                    <div className="px-4 py-4 w-full">
                        <div className="flex max-w-full mb-6">
                            <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Liste des produits</h2>
                            <button className="bg-[#6ea3d8] text-white text-xs font-cabin px-2 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                                AJOUTER
                            </button>
                        </div>
                        <table className="table-fixed w-full border-collapse bg-white rounded-lg text-gray-600 font-cabin">
                            <thead>
                                <tr>
                                    <th className="w-1/4 px-4 py-2 text-center">Produit</th>
                                    <th className="w-1/4 px-4 py-2 text-center">Espèce</th>
                                    <th className="w-1/4 px-4 py-2 text-center">Quantité</th>
                                    <th className="w-1/4 px-4 py-2 text-center">Qualité</th>
                                    <th className="w-1/4 px-4 py-2 text-center">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id} className="border-b hover:bg-gray-100 text-center">
                                        <td className="w-1/4 px-4 py-2">{item.name}</td>
                                        <td className="w-1/4 px-4 py-2"><span>{item.espece}</span></td>
                                        <td className="w-1/4 px-4 py-2">{item.age}</td>
                                        <td className="w-1/4 px-4 py-2">{item.q}</td>
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

            <div className=" w-full p-8 h-screen">
                <div className="flex mb-8">
                    <div className="bg-[#FFF6A7] w-1/2 rounded-lg shadow-md mr-4 hover:scale-105 transition duration-300 ease-out">
                        <div className="p-4">
                            <h2 className="text-xl font-cabin mb-2">Diagramme 1</h2>
                            <p className="text-gray-700 font-cabin">Contenu de la diagrame 1 ici...</p>
                        </div>
                    </div>
                    <div className="bg-[#AFDED3] w-1/2 rounded-lg shadow-md hover:scale-105 transition duration-300 ease-out">
                        <div className="p-4">
                            <h2 className="text-xl font-cabin mb-2">Diagrame 2</h2>
                            <p className="text-gray-700 font-cabin">Contenu de la diagrame 2 ici...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Production
