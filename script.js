// api = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=088a1e1c75731da45be9b04c8f14d47a"

const API_KEY = "088a1e1c75731da45be9b04c8f14d47a"

const API = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=088a1e1c75731da45be9b04c8f14d47a"

//console.log(API)

const inputEl = document.querySelector(".search-bar")

async function fetchingData() {
  try {

    const inputValue = inputEl.value;
    document.querySelector(".weather-details").style.display = "block";

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inputValue}&appid=${API_KEY}`);

    const data = await response.json();


    document.getElementById("cityName").innerHTML = data.name;

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

    document.getElementById("humidityPercent").innerHTML = data.main.humidity + "%";

    document.getElementById("windSpeed").innerHTML = data.wind.speed + " km / hr"

    const imgName = data.weather[0].main;
    const imgEl = document.getElementById("weatherIcon");
    imgEl.src = `images/${imgName.toLowerCase()}.png`;

    console.log(data);


    inputEl.value = ""
  
  } catch (error) {
    console.log(error)
  }
}