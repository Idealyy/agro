import React, { useState, useEffect } from 'react';

const EventForm = () => {

    const words = ["idealy", "miora", "damiora"];
  const [randomWord, setRandomWord] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);

    const now = new Date();
    const start = now.toISOString().slice(0, 16);
    const end = new Date(now.getTime() + 60 * 60 * 1000).toISOString().slice(0, 16);

    setStartDate(start);
    setEndDate(end);
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md font-cabin">
      <form>
        <div className="mb-4 flex ">
          <label className="block text-gray-700 text-lg font-bold mb-2 " htmlFor="title">
            Intitulé
          </label>
          <label className="block text-gray-700 text-lg  mb-2 mx-4" htmlFor="title">
            {randomWord}
          </label>
         
        </div>
       
        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold mb-2 mr-2" htmlFor="start-time">
            Date début
          </label>
          <input
            id="start-time"
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4 flex">
          <label className="block text-gray-700 text-sm font-bold mb-2 mr-5" htmlFor="end-time">
            Date fin
          </label>
          <input
            id="end-time"
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
       
        
      </form>
    </div>
  );
};

export default EventForm;
