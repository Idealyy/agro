import React, { useState, useEffect } from 'react';

const EventForm = () => {

  

 

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md font-cabin">
      <form>
       <div className='flex space-x-16 justify-center items-center'>
       <h3 className='text-gray-700 font-bold '>Evénement</h3>
        <div className='rounded-full bg-blue-500 w-6 h-6 text-4xl  end-1'>
          +
        </div>
       </div>
        <div className="mt-2   flex ">
          <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="title">
            Intitulé
          </label>
          <label className="block text-gray-700 text-sm  mb-2 mx-4" htmlFor="title">
            
          </label>
         
        </div>
       
        <div className="flex ">
         <div>
         <label className=" text-gray-700 text-sm font-bold " htmlFor="start-time">
            Début
          </label>
         </div>
          <div>
          <input
            id="start-time"
            type="datetime-local"
            // value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-2 py-2  rounded-md focus:outline-none  focus:border-blue-300"
          />
          </div>
        </div>
        <div className=" flex">
          <label className=" text-gray-700 text-sm font-bold " htmlFor="end-time">
            Fin
          </label>
          <input
            id="end-time"
            type="datetime-local"
            // value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-3 py-2  rounded-md focus:outline-none  focus:border-blue-300"
          />
        </div>
       
        
      </form>
    </div>
  );
};

export default EventForm;
