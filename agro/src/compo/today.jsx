
import { FaSun } from 'react-icons/fa';
import WeatherCard from './weathercard';
import React, { useState, useEffect } from 'react';

const today = ({ weather }) => {


    const todayData = {
        day: "Aujourd'hui",
        sun: <img width="96" height="96" src="https://img.icons8.com/emoji/96/000000/sun-emoji.png" alt="sun-emoji" />,
        rain: <img width="96" height="96" src="https://img.icons8.com/emoji/96/cloud-with-rain-emoji.png" alt="cloud-with-rain-emoji" />,
        cloud: <img width="96" height="96" src="https://img.icons8.com/emoji/96/sun-behind-cloud.png" alt="sun-behind-cloud" />,
    };

    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const fetchWeatherForecast = async () => {
            const API_KEY = '3604dfeab381085661ccc37d5e09ff28';
            const latitude = '-21.446951';
            const longitude = '47.087212';
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=fr&appid=${API_KEY}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather forecast');
                }
                const data = await response.json();
                setForecastData(data);
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
        else if (desc=="couvert" || desc=="nuageux" || desc=="peu nuageux"){
            return <img width="96" height="96" src="https://img.icons8.com/emoji/96/cloud-emoji.png" alt="cloud-emoji"/>
            }
        else{
        
        return "Error: Unknown"
        }
    }

    return (
        <div>
            <div className={`flex justify-center space-x-10 rounded-3xl bg-white
                // ${weather == 'Partiellement nuageux' && `shadow-blue-300`}
                // ${weather == 'Ensoleillé' && `shadow-yellow-400`}
                // ${weather == 'Orageux' && `shadow-gray-800`}
                // ${weather == 'pluvieux' && `shadow-gray-400`}
                
                shadow-xl transition duration-200 ease-in-out hover:translate-y-5 `}>

                {forecastData && (
                    <WeatherCard
                        day={todayData.day}
                        date={new Date(forecastData.list[0].dt_txt).toLocaleDateString()}
                        condition={forecastData.list[0].weather[0].description}
                        temperature={(forecastData.list[0].main.temp - 273.15).toFixed(0)}
                        precipitation={forecastData.list[0].pop * 100}
                        icon={getIconWeather(forecastData.list[0].weather[0].description)}
                        wind={forecastData.list[0].wind.speed}
                    />
                )}
            </div>
        </div>
    )
}

export default today

