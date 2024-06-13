
import WeatherCard from './weathercard';
import React, { useState, useEffect } from 'react';

const Tomorrow = ({ weather }) => {
    const todayData = {
        day: "Aujourd'hui",
        date: new Date().toLocaleDateString(),
        sun:<img width="96" height="96" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" alt="sun-emoji" />,
        rain:<img width="96" height="96" src="https://img.icons8.com/emoji/96/cloud-with-rain-emoji.png" alt="cloud-with-rain-emoji"/>,
        cloud:<img width="96" height="96" src="https://img.icons8.com/emoji/96/sun-behind-cloud.png" alt="sun-behind-cloud"/>,
        
    };

    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const fetchWeatherForecast = async () => {
            const API_KEY = '1e65e28e2bfe20879c533dcec0705557'; // Remplacez par votre propre clé API
            const latitude = '-21.446951'; // Exemple de latitude
            const longitude = '47.087212'; // Exemple de longitude
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=fr&appid=${API_KEY}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather forecast');
                }
                const data = await response.json();
                // Filtrer les données pour obtenir celles du jour suivant
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                const tomorrowData = data.list.filter(item => {
                    const itemDate = new Date(item.dt_txt);
                    return itemDate.getDate() === tomorrow.getDate() &&
                           itemDate.getMonth() === tomorrow.getMonth() &&
                           itemDate.getFullYear() === tomorrow.getFullYear();
                });
                setForecastData(tomorrowData[0]); // Prenez la première prévision du jour suivant
            } catch (error) {
                console.error('Error fetching weather forecast:', error);
            }
        };

        fetchWeatherForecast();
    }, []);
    
    const getIconWeather = (desc) => {
        if (desc == "légère pluie" || desc == "pluie modérée") {
            return <img width="96" height="96" src="https://img.icons8.com/emoji/96/cloud-with-rain-emoji.png" alt="cloud-with-rain-emoji" />
        }
        else if (desc == "ciel dégagé" || desc == "ensoleillé"){
            return <img width="96" height="96" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" alt="sun-emoji" />
         
        }
        else if(desc == "orage"){
        return <img width="96" height="96" src="https://img.icons8.com/emoji/96/cloud-with-lightning-and-rain.png" alt="cloud-with-lightning-and-rain"/>
        }
        else if (desc=="couvert" || desc=="nuageux"){
        return <img width="96" height="96" src="https://img.icons8.com/emoji/96/cloud-emoji.png" alt="cloud-emoji"/>
        }
        else{ 
        
        return "Error: Unknown"
        }
    }


    return (
        <div>
            <div className={`flex justify-center space-x-10 rounded-3xl bg-white
                ${weather === 'Partiellement nuageux' && 'shadow-blue-300'}
                ${weather === 'Ensoleillé' && 'shadow-yellow-400'}
                ${weather === 'Orageux' && 'shadow-gray-800'}
                ${weather === 'pluvieux' && 'shadow-gray-400'}
                shadow-xl transition duration-200 ease-in-out hover:translate-y-5`}>
                
                {forecastData && (
                    <WeatherCard
                        day="Demain"
                        date={new Date(forecastData.dt_txt).toLocaleDateString()}
                        icon={getIconWeather(forecastData.weather[0].description)}
                        condition={forecastData.weather[0].description}
                        temperature={(forecastData.main.temp - 273.15).toFixed(0)}
                        precipitation={forecastData.pop * 100}
                        wind={forecastData.wind.speed}
                    />
                )}
            </div>
        </div>
    )
}

export default Tomorrow;
