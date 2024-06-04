import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";


const data = [
    { name: 'Lait', espece: 'bovin', age: 5, q: 'bon' },
    { name: 'fromage', espece: 'bovin', age: 25, q: 'bon' },
    { name: ' œufs', espece: 'volaille', age: 40, q: 'bon' },
];

const Production = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        <div className="inline h-screen">
            <div className="overflow-x-auto rounded-lg shadow-md mx-4 transform translate-y-5 mb-4 ">
                <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
                    <div className="px-4 py-4 w-full">
                        <div className="flex max-w-full mb-6">
                            <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Liste des produits</h2>
                            <button onClick={togglePopup} className="bg-[#6ea3d8] text-white text-xs font-cabin px-2 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                                AJOUTER
                            </button>

                            <div className="flex justify-center items-center">


                            </div>
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
                                    Type de produit
                                </label>
                                <input
                                    className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    type="text"
                                    name="models"
                                // value={formData.models} 
                                // onChange={handleChange} 
                                />
                                <label htmlFor="" className='block text-sm font-medium leading-6 text-gray-900'>
                                    Quantité
                                </label>
                                <input
                                    className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    type="text"
                                    name="brand"
                                // value={formData.brand} 
                                // onChange={handleChange} 
                                />
                                <label htmlFor="" className='block text-sm font-medium leading-6 text-gray-900'>
                                    Espèce fournisseur
                                </label>
                                <input
                                    className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    type="text"
                                    name="brand"
                                // value={formData.brand} 
                                // onChange={handleChange} 
                                />
                                <label htmlFor="" className='block text-sm font-medium leading-6 text-gray-900'>
                                    Qualité
                                </label>
                                <input
                                    className="block w-full p-2 my-2 rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                                    type="text"
                                    name="brand"
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
