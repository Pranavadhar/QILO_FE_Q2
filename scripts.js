document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '8ad239466a6f4c0c26d5ec32556713c5'; // Replace with your OpenWeatherMap API key
    const city = 'London'; // Replace with the city you want to get weather data for
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            createChart(temperature);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });

    function createChart(temperature) {
        const ctx = document.getElementById('temperatureChart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Current Temperature'],
                datasets: [{
                    label: 'Temperature (°C)',
                    backgroundColor: 'rgba(0, 123, 255, 0.5)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 1,
                    data: [temperature],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
