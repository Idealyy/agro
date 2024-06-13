import React, { useEffect, useState } from 'react';
import Calendrier from './calendar';
import EventForm from './eventForm';
import url from "./../api/api";
import moment from "moment";
import axios from 'axios';


const SectionAgri = () => {
  const [dateSelected, setDateSelected] = useState(''); // Utilisation de dateSelected comme state pour la date sélectionnée
  const [evenement, setEvenement] = useState([]);

  useEffect(() => {
    fetchEvent();
  }, [dateSelected]);

  const handleFilter = (data, selectedDate) => {
    const filtered = data.filter(item => {
      // Convertir la date de début en objet moment
      const eventStartDate = moment(item.date_debut);
  
      // Comparer les dates en tenant compte du fuseau horaire
      return eventStartDate.format('YYYY-MM-DD') === selectedDate;
    });
  
    setEvenement(filtered);
  };
  

  const fetchEvent = async () => {

    try {
      const response = await axios.get("http://localhost/api/agriculture/calendrier/getAll");
      const eventList = response.data;
      const currentDate = dateSelected || new Date().toISOString().split('T')[0];

      // Mettre à jour le filtre avec la date sélectionnée
      handleFilter(eventList, currentDate);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const getDateFunc = (selectedDate) => {
    setDateSelected(selectedDate);
  };

  return (
    <div className="w-3/8 px-8 mt-0 mr-0 bg-gradient-to-t from-sky-200 to-[#6ea3d8]">
      
      <div className='mt-10'>
        <Calendrier getDate={getDateFunc} />
      </div>
      <div className='mt-5 mx-2 w-64'>
        <EventForm evenement={evenement} />
      </div>
    </div>
  );
};

export default SectionAgri;
