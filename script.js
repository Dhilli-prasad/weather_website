async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'your_api_key_here'; // 🔑 Replace with your actual API key
  const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric;

  const resultDiv = document.getElementById('weatherResult');

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;

    resultDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temperature: ${temp}°C</p>
      <p>💧 Humidity: ${humidity}%</p>
      <p>🌤 Condition: ${description}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = <p style="color: red;">${error.message}</p>;
  }
}