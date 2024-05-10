import React from 'react';
import WeatherCard from './weathercard';

const Tomorrow = ({ weather }) => {

  const tomorrowData = {
    day: "Demain",
    date: "30 juillet",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-24 h-24 p-2 text-yellow-400 fill-current">
      <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
      <rect width="32" height="48" x="240" y="16"></rect>
      <rect width="32" height="48" x="240" y="448"></rect>
      <rect width="48" height="32" x="448" y="240"></rect>
      <rect width="48" height="32" x="16" y="240"></rect>
      <rect width="32" height="45.255" x="400" y="393.373" transform="rotate(-45 416 416)"></rect>
      <rect width="32.001" height="45.255" x="80" y="73.373" transform="rotate(-45 96 96)"></rect>
      <rect width="45.255" height="32" x="73.373" y="400" transform="rotate(-45.001 96.002 416.003)"></rect>
      <rect width="45.255" height="32.001" x="393.373" y="80" transform="rotate(-45 416 96)"></rect>
    </svg>,
    condition: "Ensoleillé",
    temperature: "35º",
    precipitation: "20 l/m²",
    wind: "15 km/h",
  };

  return (
    <div>
      <div className={`flex justify-center space-x-10 rounded-3xl bg-white
       ${weather == 'Partiellement nuageux' && `shadow-blue-300`}
       ${weather == 'Ensoleillé' && `shadow-yellow-400`}
       ${weather == 'Orageux' && `shadow-gray-800`}
       ${weather == 'pluvieux' && `shadow-gray-400`}
       shadow-xl transition duration-200 ease-in-out hover:translate-y-5 `}>
        <WeatherCard
          day={tomorrowData.day}
          date={tomorrowData.date}
          icon={tomorrowData.icon}
          condition={tomorrowData.condition}
          temperature={tomorrowData.temperature}
          precipitation={tomorrowData.precipitation}
          wind={tomorrowData.wind}
        />
      </div>
    </div>

  );
};

export default Tomorrow;
