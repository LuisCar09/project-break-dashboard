const API = 'https://api.weatherapi.com'
const apiKey = 'e77691c5fae848ed8b6162904241407'
const containerWeather = document.querySelector('.container-weather')
const forecastContainer = document.querySelector('.forecastContainer')

const fetchWeather = async () => {

    const getData = await fetch(`${API}/v1/forecast.json?key=${apiKey}&q=Tenerife&aqi=no`)
    const data = await getData.json()
    
    return data
}

const showWeather = async () => {
    const data = await fetchWeather()
    
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
    const { city, country, weather, picture, temperature, humidity, wind, precipitation, forecast } = dayWeather
   
    
    let elements = ''

    const container = `
        
          <article class='article-container'>
                <h2 class='article-title'>${city} / ${country}</h2>
                <span class='weather'>${weather}</span>
                <div class='article-features' >
                    <img class='article-features--weather' src="${picture}" alt="${weather}-image">
                    <h2 class='article-features--title'>${temperature}</h2>
                    <img class='article-features-celcius' src="../../src/assets/celsius.png" alt="celcius-degrees">
                    <ul class='article-conditions'>
                        <li class='article-precipitation'>Precipitaciones: ${precipitation}%</li>
                        <li class='article-humidity'> Humidity: ${humidity}%</li>
                        <li class='article-wind'> wind: ${wind} km/h</li>
                    </ul>
                </div>
                
            </article>
        `
       

        forecast.map(fore => {
        // console.log(fore.time.split(' ')[1]);
        // console.log(fore.time.split(' ').slice(1)[0])
        // console.log(fore);
        const {time,condition,temp_c} = fore    
        
        

        elements += `
            
            <div class='forecast-container'>
                <div class="foreHour">${time.split(' ')[1]}</div>     
                <img  src="${condition.icon}" alt="${city}-forecast"> 
                <p class="degres">${temp_c} °C</p>
            </div> 
            
            `
    });
    containerWeather.insertAdjacentHTML('afterbegin',container)
    
    const articleContainer = document.querySelector('.article-container')

    const aside = document.createElement('aside')
    aside.setAttribute('class','article-container-aside')
    aside.insertAdjacentHTML('beforeend',elements)
    articleContainer.appendChild(aside)
}

showWeather()

// <div>City: <span class="city">${city}</span></div>
        // <div>Country: <span class="country">${country}</span></div>
        // <div>Weather: <span class="weather"></span>${weather}</div>
        // <div class="picture" style="width: 40px;height: 40px;">
        //      <img style="width: 100%;height: 100%;"  src="${picture}" alt="${city}-forecast">
        //      <div class="temperature">${temperature}</div>
        // </div>
        // <div>
        //     <p>Precitation: <span class="precipitation">${precipitation}</span> </p>
        //     <p>Humidity: <span class="humidity">${humidity}</span></p>
        //     <p>Wind: <span class="wind">${wind}</span></p>
        // </div>