import React from 'react';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";


const data = [
    { id: 1, plantation: 'FFF', production: 'GGG', recolte: '...', plante: '...', produit: '...', surface: '...' },
    { id: 2, plantation: 'HHH', production: 'III', recolte: '...', plante: '...', produit: '...', surface: '...' },
    { id: 3, plantation: '...', production: '...', recolte: '...', plante: '...', produit: '...', surface: '...' },
];

const Phase = ({ cultivation }) => {
    // Vérifie si l'objet culture est défini avant d'essayer d'accéder à ses propriétés
    if (!cultivation) {
        return <div>Aucune culture sélectionnée</div>;
    }

    // Affiche les détails de la culture si elle est définie
    return (
        <div>
            {/* <p>Plantation: {cultivation.plantation}</p>
      <p>Production: {cultivation.production}</p> */}
            {/* <p>Recolte: {cultivation.recolte}</p> */}
            {/* Ajoutez d'autres détails de culture ici si nécessaire */}

            <div className="font-cabin overflow-x-auto rounded-lg shadow-md mx-4 mb-5 h-50 overflow-y-scroll">
                <div className="max-w-full bg-white overflow-hidden shadow-md rounded-lg">
                    <div className="px-2 py-2 w-full">
                        <div className="flex max-w-full mb-6">
                            <h2 className="text-xl font-cabin text-gray-600 mb-2 w-5/6">Phénophase</h2>
                            <div className="mx-2">
                                <button className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                                    AJOUTER
                                </button>
                            </div>
                        </div>
                        <table className=" table-fixed w-full  border-collapse bg-white rounded-lg text-gray-600">
                            <thead>
                                <tr>
                                    <th className="w-1/8 px-4 py-2 text-center">Etape</th>
                                    <th className="w-1/8 px-4 py-2 text-center">date début</th>
                                    <th className="w-1/8 px-4 py-2 text-center">date fin</th>
                                    <th className="w-1/8 px-4 py-2 text-center">besoin en eau</th>
                                    <th className="w-1/8 px-4 py-2 text-center">besoin en eau</th>
                                    <th className="w-1/8 px-4 py-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index} className={`border-b hover:bg-gray-100 text-center `}>

                                        <td className="px-4 py-2">{cultivation.plantation}</td>
                                        <td className="px-4 py-2">{cultivation.production}</td>
                                        <td className="px-4 py-2">{item.recolte}</td>
                                        <td className="px-4 py-2">{item.plante}</td>
                                        <td className="px-4 py-2">{item.produit}</td>
                                        <td className="px-4 py-2">
                                            <div className="flex justify-center">
                                                <div className="mr-4 hover:text-blue-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer ">
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
    );
};

export default Phase;
