import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineModeEdit } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import DiagKPI from './diagKPI'; 
import url from "./../api/api"
import Bar from './BarChartComponent'
// Assurez-vous que le chemin est correct

const Production = () => {
    const [type_produit, setType_produit] = useState('');
    const [especef, setEspecef] = useState('');
    const [mois, setMois] = useState('');
    const [id_produit, setId_produit] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [diagProps, setDiagProps] = useState(null);
    const [produitsList, setProduitsList] = useState([]);
    
    const [formData, setFormData] = useState({
        type_produit: '',
        espece: '',
        quantite: '',
        qualite: ''
    });

    useEffect(() => {
        fetchProduits();
    }, []);
    
    const fetchProduits = async () => {
        try {
            const response = await url.get('produits');
            setProduitsList(response.data);
            setLoading(false);
            console.log(response.data); 
        } catch (error) {
            console.log(error);
        }
    };
    
    const handleChangedata = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };
    
    const handleSubmitdata = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/submit', formData);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    const fetchIdProduit = () => {
        const productNameLowerCase = type_produit.trim().toLowerCase();
        const foundProduct = produitsList.find(product => product.type_produit.trim().toLowerCase() === productNameLowerCase);
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

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/elevage/produit/delete/${id}`);
            if (response.status === 200) {
                setProduitsList(produitsList.filter(product => product.id_produit !== id));
            } else {
                console.error('Failed to delete the product');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression du produit :', error);
        }
    };

    const handleUpdate = (product) => {
        setType_produit(product.type_produit);
        setEspecef(product.espece);
        setMois(product.mois);
        setId_produit(product.id_produit);
        // Set additional state or handle logic for the update if necessary
    };

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className='h-screen flex flex-col space-y-1 '>
            <div className='h-[200] overflow-y-scroll'>
               <div className="flex justify-center items-center py-3 ">
               <h1 className=' text-xl font-cabin text-gray-600 w-5/6'>
                    Liste des produits par espèce
                </h1>
                <button  className="bg-[#6ea3d8] text-white text-xs font-cabin px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                    AJOUTER
                </button>
               </div>
                <div className="h-[200px] px-8 py-2">
                    <table className="table-fixed px-2  border-collapse bg-white rounded-lg text-gray-600 font-cabin h-40  overflow-y-scroll">
                        <thead>
                            <tr>
                                <th className="w-1/4 px-4 py-2 text-center">Produit</th>
                                <th className="w-1/4 px-4 py-2 text-center">Espèce</th>
                                <th className="w-1/4 px-4 py-2 text-center">Quantité</th>
                                {/* <th className="w-1/4 px-4 py-2 text-center">Qualité</th> */}
                                <th className="w-1/4 px-4 py-2 text-center">Date production</th>
                                <th className="w-1/4 px-4 py-2 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="text-center py-4">Chargement en cours...</td>
                                </tr>
                            ) : (
                                produitsList.map((item, index) => (
                                    <TableRow key={index} item={item} onDelete={handleDelete} onUpdate={handleUpdate} />
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Formulaire pour ajouter ou modifier un produit */}
          

            <div className= 'w-[50%] mx-48 mt-0 '>
                <Bar/>
            </div>
        </div>
    );
};

const TableRow = ({ item, onDelete, onUpdate }) => (
    <tr className=" hover:bg-gray-100 text-center">
        <td className="w-1/4">{item.type_produit}</td>
        <td className="w-1/4">{item.especef}</td>
        <td className="w-1/4">{item.quantite}</td>
        {/* <td className="w-1/4">{item.qualite}</td> */}
        
        <td className="w-1/4">{item.date_prod}</td>
        
        <td className="w-1/4">
            <div className="flex justify-center">
                <div className="mr-4 hover:text-blue-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer" onClick={() => onUpdate(item)}>
                    <MdOutlineModeEdit />
                </div>
                <div className="hover:text-red-500 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer" onClick={() => onDelete(item.id_produit)}>
                    <RiDeleteBinLine />
                </div>
            </div>
        </td>
    </tr>
);

export default Production;
