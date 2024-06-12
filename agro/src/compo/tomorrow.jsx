
import WeatherCard from './weathercard';
import React, { useState, useEffect } from 'react';

const Tomorrow = ({ weather }) => {
    const todayData = {
        day: "Aujourd'hui",
        date: new Date().toLocaleDateString(),
        icon: (
            <svg className="h-20" viewBox="0 0 81 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HD" transform="translate(-174.000000, -308.000000)" fillRule="nonzero">
                        <g id="Group" transform="translate(95.000000, 222.000000)">
                            <g id="2" transform="translate(79.000000, 86.000000)">
                                <path d="M35.288454,26.4312368 C34.8062502,27.5960191 33.4711041,28.1493583 32.3063218,27.6671545 C31.1415395,27.1849507 30.5882004,25.8498046 31.0704042,24.6850223 C33.990421,17.6316069 40.8868442,12.9347826 48.6521739,12.9347826 C59.1575903,12.9347826 67.673913,21.4511053 67.673913,31.9565217 C67.673913,34.1117269 67.3144924,36.2210565 66.6187558,38.217674 C66.2039356,39.4081203 64.90261,40.0368896 63.7121636,39.6220695 C62.5217172,39.2072493 61.8929479,37.9059237 62.3077681,36.7154773 C62.8357821,35.2001886 63.1086957,33.5985422 63.1086957,31.9565217 C63.1086957,23.9724052 56.6362904,17.5 48.6521739,17.5 C42.7496023,17.5 37.5080182,21.0697924 35.288454,26.4312368 Z M71.2488471,9.35984851 C72.1402613,10.2512627 72.1402613,11.6965305 71.2488471,12.5879447 L68.020751,15.8160409 C67.1293368,16.707455 65.6840689,16.707455 64.7926548,15.8160409 C63.9012406,14.9246267 63.9012406,13.4793588 64.7926548,12.5879447 L68.020751,9.35984851 C68.9121651,8.46843437 70.357433,8.46843437 71.2488471,9.35984851 Z M48.6521739,0 C49.9128239,0 50.9347826,1.02195872 50.9347826,2.2826087 L50.9347826,6.84782609 C50.9347826,8.10847606 49.9128239,9.13043478 48.6521739,9.13043478 C47.3915239,9.13043478 46.3695652,8.10847606 46.3695652,6.84782609 L46.3695652,2.2826087 C46.3695652,1.02195872 47.3915239,0 48.6521739,0 Z M80.6086957,31.9565217 C80.6086957,33.2171717 79.5867369,34.2391304 78.326087,34.2391304 L73.7608696,34.2391304 C72.5002196,34.2391304 71.4782609,33.2171717 71.4782609,31.9565217 C71.4782609,30.6958718 72.5002196,29.673913 73.7608696,29.673913 L78.326087,29.673913 C79.5867369,29.673913 80.6086957,30.6958718 80.6086957,31.9565217 Z M26.0555007,9.35984851 C26.9469148,8.46843437 28.3921827,8.46843437 29.2835969,9.35984851 L32.511693,12.5879447 C33.4031072,13.4793588 33.4031072,14.9246267 32.511693,15.8160409 C31.6202789,16.707455 30.175011,16.707455 29.2835969,15.8160409 L26.0555007,12.5879447 C25.1640865,11.6965305 25.1640865,10.2512627 26.0555007,9.35984851 L26.0555007,9.35984851 Z" id="Shape" fill="#FECA57"></path>
                                <path d="M45.138293,37.2826087 C44.3551693,37.2826087 43.6267158,36.8811485 43.2084767,36.2190618 C39.4665187,30.2954152 32.9620213,26.6304348 25.826087,26.6304348 C14.4802372,26.6304348 5.2826087,35.8280633 5.2826087,47.173913 C5.2826087,58.5197628 14.4802372,67.7173913 25.826087,67.7173913 L55.5,67.7173913 C63.9043331,67.7173913 70.7173913,60.9043331 70.7173913,52.5 C70.7173913,44.0956669 63.9043331,37.2826087 55.5,37.2826087 L45.138293,37.2826087 Z M46.3580943,32.7173913 L55.5,32.7173913 C66.4256331,32.7173913 75.2826087,41.5743669 75.2826087,52.5 C75.2826087,63.4256331 66.4256331,72.2826087 55.5,72.2826087 L25.826087,72.2826087 C11.9589373,72.2826087 0.717391304,61.0410627 0.717391304,47.173913 C0.717391304,33.3067633 11.9589373,22.0652174 25.826087,22.0652174 C34.1091478,22.0652174 41.7014994,26.1099628 46.3580943,32.7173913 Z" id="Path-Copy" fill="#0ABDE3"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        ),
        condition: weather,
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
                        icon={todayData.icon}
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
