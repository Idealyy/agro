import React, { useState, useEffect } from 'react';
import {  FaPlus } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import NewEvent from "./newEvent"

const EventForm = ({ evenement }) => {

  const [closeModal, setCloseModal] = useState(true);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md font-cabin">
      <div className='flex justify-between items-center'>
        <h2 className="text-gray-700 font-bold">Filtered Events</h2>
        <div className='bg-blue-300 p-2 rounded-md' onClick={() => setCloseModal(false)}>
          <FaPlus />
        </div>
      </div>
      <ul>
        {evenement.length > 0 ? (
          evenement.map(e => (
            <div key={e.id_calendrier} className="bg-gray-100 p-2 my-2 rounded">
              <div className="font-semibold">{e.activite}</div>
              <div>Début : {new Date(e.date_debut).toLocaleString()}</div>
              <div>Fin : {e.date_fin ? new Date(e.date_fin).toLocaleString() : "N/A"}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">Aucun événement trouvé pour la date sélectionnée.</div>
        )}
      </ul>

      {
        !closeModal && (
          <div className='absolute justify-center flex items-center w-screen h-screen z-20 top-0 left-0 bg-black bg-opacity-70'>
            <div className='absolute right-10 top-10 text-white text-2xl hover:rotate-180 transition-all' onClick={() => setCloseModal(true)}><RxCross2 /></div>
            <div className=''>
              <NewEvent />
            </div>
          </div>
        )
      }

    </div>
  );
};

export default EventForm;
