import React, { useState } from 'react';

const EventForm = () => {
    const [formData, setFormData] = useState({
        id_plante: '',
        activite: '',
        date_debut: '',
        date_fin: '',
        description: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/api/agriculture/calendrier/addCalendrier', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // Handle successful response
            alert('Activité ajoutée avec succès!');
        } else {
            // Handle error response
            alert('Erreur lors de l\'ajout de l\'activité');
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Nouvel activité</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_plante">
                        ID Plante
                    </label>
                    <input
                        id="id_plante"
                        type="text"
                        placeholder="ID de la plante"
                        value={formData.id_plante}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activite">
                        Intitulé
                    </label>
                    <input
                        id="activite"
                        type="text"
                        placeholder="titre"
                        value={formData.activite}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date_debut">
                        Date début
                    </label>
                    <input
                        id="date_debut"
                        type="datetime-local"
                        value={formData.date_debut}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date_fin">
                        Date fin
                    </label>
                    <input
                        id="date_fin"
                        type="datetime-local"
                        value={formData.date_fin}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Notes
                    </label>
                    <textarea
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <button className="bg-[#6ea3d8] text-white text-xs font-cabin float-end px-4 py-2 rounded-full transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#6ea3d8] focus:outline-none">
                    AJOUTER
                </button>
            </form>
        </div>
    );
};

export default EventForm;
