
const apiKey = "f8511e1e9409c5b6726781d08a23ad8a"; 

document.getElementById("search-button").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.cod === 200) {
            displayWeather(data);
        } else {
            alert("City not found. Please try again.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Unable to fetch weather data. Please try again later.");
    }
}

function displayWeather(data) {
    const location = `${data.name}, ${data.sys.country}`;
    const temperature = `Temperature: ${data.main.temp}°C`;
    const condition = `Condition: ${data.weather[0].description}`;

    document.getElementById("location").innerText = location;
    document.getElementById("temperature").innerText = temperature;
    document.getElementById("condition").innerText = condition;
}
