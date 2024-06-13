import React, { useState, useEffect } from 'react';
import { MdOutlineModeEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import DiagKPI from './diagKPI';  // Assurez-vous que le chemin est correct

const Production = () => {
    const [type_produit, setType_produit] = useState('');
    const [especef, setEspecef] = useState('');
    const [mois, setMois] = useState('');
    const [id_produit, setId_produit] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [diagProps, setDiagProps] = useState(null);

    useEffect(() => {
        const fetchProductsFromApi = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/elevage/produit/getAll');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des produits :', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductsFromApi();
    }, []);

    const fetchIdProduit = () => {
        const productNameLowerCase = type_produit.trim().toLowerCase();
        const foundProduct = products.find(product => product.type_produit.trim().toLowerCase() === productNameLowerCase);
        if (foundProduct) {
            setId_produit(foundProduct.id_produit);
            return foundProduct.id_produit;
        } else {
            setId_produit('');
            return '';
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'type_produit') {
            setType_produit(value);
        } else if (name === 'especef') {
            setEspecef(value);
        } else if (name === 'mois') {
            setMois(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = fetchIdProduit();
        if (id) {
            setDiagProps({
                id_produit: id,
                espece_fournisseur: especef,
                type_produit,
                mois
            });
        } else {
            console.error('Produit introuvable');
        }
    };

    return (
        <div className='h-screen flex flex-col margin-8'>
            <div>
                <h1 className='text-xl font-cabin text-gray-600 mb-2 w-5/6'>
                    Liste des produits par espèce
                </h1>
                <div className="h-[250px] overflow-y-scroll p-8">
                    <table className="table-fixed overflow-x-auto w-full border-collapse bg-white rounded-lg text-gray-600 font-cabin h-56 overflow-scroll">
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
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-4">Chargement en cours...</td>
                                </tr>
                            ) : (
                                products.map((item, index) => (
                                    <TableRow key={index} item={item} />
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='flex '>
                <div className="m-5 h-24">
                    <form onSubmit={handleSubmit} className=" mx-auto bg-white p-4 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label htmlFor="type_produit" className="block text-gray-700 font-bold mb-1">Entrez le nom du produit :</label>
                            <input
                                type="text"
                                id="type_produit"
                                name="type_produit"
                                value={type_produit}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="especef" className="block text-gray-700 font-bold mb-1">Entrez l'espèce fournisseur :</label>
                            <input
                                type="text"
                                id="especef"
                                name="especef"
                                value={especef}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mois" className="block text-gray-700 font-bold mb-1">Entrez le mois :</label>
                            <input
                                type="text"
                                id="mois"
                                name="mois"
                                value={mois}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            afficher diagramme
                        </button>
                    </form>
                </div>

                {/* Afficher DiagKPI si diagProps est défini */}
                {diagProps && <DiagKPI {...diagProps} />}
            </div>
        </div>
    );
};

const TableRow = ({ item }) => (
    <tr className="border-b hover:bg-gray-100 text-center">
        <td className="w-1/4 px-4 py-2">{item.type_produit}</td>
        <td className="w-1/4 px-4 py-2">{item.especef}</td>
        <td className="w-1/4 px-4 py-2">{item.quantite}</td>
        <td className="w-1/4 px-4 py-2">{item.qualite}</td>
        <td className="w-1/4 px-4 py-2">
            <div className="flex justify-center">
                <div className="mr-4 hover:text-blue-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                    <MdOutlineModeEdit />
                </div>
                <div className="hover:text-red-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                    <RiDeleteBinLine />
                </div>
            </div>
        </td>
    </tr>
);

export default Production;
