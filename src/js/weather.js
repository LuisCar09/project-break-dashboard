const API = 'https://api.weatherapi.com'
const apiKey = '3af9e6f89d9744e6877121522242007'
const containerWeather = document.querySelector('.container-weather')
const forecastContainer = document.querySelector('.forecastContainer')
const gps = navigator.geolocation
let latitude = ''
let longitude = ''

const fetchWeather = async (coords) => {
    
    
   


    try {
        if (coords) {
            
            const {latitude,longitude} = coords
            const getData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`)
            const data = await getData.json()
            return data
        }else{
            const getData = await fetch(`${API}/v1/forecast.json?key=${apiKey}&q=Tenerife&aqi=no`)
            const data = await getData.json()
            return data
        }
    } catch (error) {
        console.error(error);
    }
}

const showWeather = async (coords) => {
    const data = await fetchWeather(coords)
    containerWeather.innerHTML = ''
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




const sucessLocation = (position) =>{
    const {latitude,longitude} = position.coords
    const coords = {latitude,longitude}
    
    showWeather(coords)
    
}

const errorLocation = (error) => {
    console.error(error);
}

gps.getCurrentPosition(sucessLocation,errorLocation)
showWeather()
