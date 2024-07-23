const API = 'https://api.weatherapi.com'
const apiKey = '3af9e6f89d9744e6877121522242007'
const containerWeather = document.querySelector('.container-weather')
const forecastContainer = document.querySelector('.forecastContainer')
const mainIndexContainer = document.querySelector('.main-container') //Contenedor del index.html
const gps = navigator.geolocation //Creamos la geolocalizacion 
let latitude = ''
let longitude = ''
// ./src/assets/celsius.png // ../../src/assets/celsius.png
const fetchWeather = async (coords) => {
    
    try {
        let url;//Almacenar la url
        if (coords) {
            const {latitude,longitude} = coords
            url =`${API}/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no` //Si existe coord esta sera el url
            
            
        }else{
            url =`${API}/v1/forecast.json?key=${apiKey}&q=Tenerife&aqi=no` //Si no existe coods esta sera la url
            
        }

        const response = await fetch(url) //Solicitamos data a la API
        if (!response.ok) {
            throw new Error(`Status ${response.status} : ${response.statusText} `) //Mensaje con sus status si no es 200
        }

        const data = await response.json() // obtenemos data y la convertimos en JSON
        
        const dayCityWeather = { //Creamos el objeto con sus key:values
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
        return dayCityWeather //retorna el objeto 
    } catch (error) {
        throw new Error('Error fetching data from API'); 
    }
}

const showWeather = async (coords) => {
    const data = await fetchWeather(coords) //Almacenamos la data que nos devuelve la function
    containerWeather.innerHTML = '' //Limpiamos container
    const { city, country, weather, picture, temperature, humidity, wind, precipitation, forecast } = data //Destructuramos la data
   
    const container = `
        
          <article class='article-container'>
                <h2 class='article-title'>${city} / ${country}</h2>
                <span class='weather'>${weather}</span>
                <div class='article-features' >
                    <img class='article-features--weather' src="${picture}" alt="${weather}-image">
                    <h2 class='article-features--title'>${temperature}</h2>
                    <img class='article-features-celcius' src="${!mainIndexContainer ? '../../src/assets/celsius.png' : './src/assets/celsius.png '}" alt="celcius-degrees">
                    <ul class='article-conditions'>
                        <li class='article-precipitation'>Precipitaciones: ${precipitation}%</li>
                        <li class='article-humidity'> Humidity: ${humidity}%</li>
                        <li class='article-wind'> wind: ${wind} km/h</li>
                    </ul>
                </div>
                
            </article>
        `
       

    const foreCastElements = forecast.map(fore => createForecastElements(fore)).join('') //Creamos el forecast items
    

    containerWeather.insertAdjacentHTML('afterbegin',container) //Insertamos el contenedor del tiempo justo despues de empezar el contenedor
    
    const articleContainer = document.querySelector('.article-container') //Obtenemos el ID del articleContainer
    const aside = document.createElement('aside') //Creamos un elemento aside
    aside.setAttribute('class','article-container-aside') //Agreamos la clase
    aside.insertAdjacentHTML('beforeend',foreCastElements) //Insertamos en ultima posicion
    articleContainer.appendChild(aside) //Insertamos como hijo del article
}
//Crea el forecast items
const createForecastElements = (forecast) => {
    const {time,condition,temp_c} = forecast; //Destructuramos data
    return `
            
            <div class='forecast-container'>
                <div class="foreHour">${time.split(' ')[1]}</div>     
                <img  src="${condition.icon}" alt="image-weather"> 
                <p class="degres">${temp_c} °C</p>
            </div> 
            
            `
}


const successLocation = (position) =>{
    const {latitude,longitude} = position.coords //destructuramos obtenemos latitud y longitud
    const coords = {latitude,longitude}
    showWeather(coords)//Llamamos showWeather con las coordenadas
}

const errorLocation = (error) => {
    console.error(error);
}

gps.getCurrentPosition(successLocation,errorLocation) //De ser aceptado por el usuario ejecutara el callback success otherwise it'll call errorLocation
showWeather() //Iniciamos script
