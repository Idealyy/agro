import React, { useEffect } from 'react';

const FetchDataComponent = () => {
    useEffect(() => {
        fetch('http://localhost:8080/api/agriculture/calendrier/test')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    return (
        <div>
            <h1>Fetch Data Component</h1>
            <p>Check the console for fetched data.</p>
        </div>
    );
};

export default FetchDataComponent;
