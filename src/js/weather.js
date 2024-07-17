const API = 'https://api.weatherapi.com'
const apiKey = 'e77691c5fae848ed8b6162904241407'
const mainContainer = document.querySelector('.container')
const forecastContainer = document.querySelector('.forecastContainer')

const fetchWeather = async () => {

    const getData = await fetch(`${API}/v1/forecast.json?key=${apiKey}&q=Tenerife&aqi=no`)
    const data = await getData.json()
    console.log(data);

    const dayWeather = {
        city: data.location.name,
        country: data.location.country,
        weather: data.current.condition.text,
        picture: data.current.condition.icon,
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        precipitation: data.current.precip_mm,
        forecast: data.forecast.forecastday[0].hour
    }
    showWeather(dayWeather)
}

const showWeather = (weatherFeatures) => {
    const { city, country, weather, picture, temperature, humidity, wind, precipitation, forecast } = weatherFeatures
    console.log(forecast);

    let elements = ''

    const container = `
        <div>City: <span class="city">${city}</span></div>
        <div>Country: <span class="country">${country}</span></div>
        <div>Weather: <span class="weather"></span>${weather}</div>
        <div class="picture" style="width: 40px;height: 40px;">
             <img style="width: 100%;height: 100%;"  src="${picture}" alt="${city}-forecast">
             <div class="temperature">${temperature}</div>
        </div>
        <div>
            <p>Precitation: <span class="precipitation">${precipitation}</span> </p>
            <p>Humidity: <span class="humidity">${humidity}</span></p>
            <p>Wind: <span class="wind">${wind}</span></p>
        </div>
        `
    
    
    
     forecast.map(fore => {
        console.log(fore.time)
        elements += `
            
            <div>
                <div class="foreHour">${fore.time}</div>
                <div style="width: 40px;height: 40px; class="image">
                <img style="width: 100%;height: 100%;"  src="${fore.condition.icon}" alt="${city}-forecast"> 
                </div>
                <div class="degres">${fore.temp_c}</div>
            </div> 
            
            `
    });
    mainContainer.insertAdjacentHTML('afterbegin',container)
    forecastContainer.innerHTML = elements
}

fetchWeather()