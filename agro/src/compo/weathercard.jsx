import React from 'react';

const WeatherCard = ({ day, date, icon, condition, temperature, precipitation, wind }) => {
    return (
      <div className="w-64 cursor-pointer rounded flex flex-col justify-center items-center text-center p-6 bg-white backdrop-blur-md backdrop-filter bg-opacity-20 shadow-md">
        <div className="text-md font-bold flex flex-col text-gray-900">
          <span className="uppercase text-gray-700">{day}</span>
          <span className="font-normal text-gray-500 text-sm">{date}</span>
        </div>
        <div className="w-32 h-32 flex items-center justify-center">
       {icon}
        </div>
        <p className="text-gray-700 mb-2">{condition}</p>
        <div className="text-3xl font-bold text-gray-900 mb-6">
          {temperature}°C
        </div>
        <div className="flex justify-between w-full">
          <div className="flex items-center text-gray-500 px-2">
            {precipitation}%
          </div>
          <div className="flex items-center text-gray-500 px-2">
            {wind} m/s
          </div>
        </div>
      </div>
    );
  };
  
export default WeatherCard;
