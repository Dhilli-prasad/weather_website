const apiKey = 'your_api_key_here';

document.querySelector("button").addEventListener("click", () => {
  const city = document.querySelector("input").value;
  fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
});