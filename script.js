const apiKey = "b430000e22129909ba2a9bb2782aba9c";

async function getWeather() {
    const city = document.getElementById("cityInput").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById("weatherResult").innerHTML = `
                <h2>${data.name}</h2>
                <p>🌡 Temperature: ${data.main.temp}°C</p>
                <p>🌥 Condition: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById("weatherResult").innerHTML = "City not found!";
        }
    } catch (error) {
        console.error(error);
        document.getElementById("weatherResult").innerHTML = "Error fetching data.";
    }
}