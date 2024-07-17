const hour = document.getElementById('hour')
const date = document.getElementById('date')
const message = document.getElementById('message')
const backgroundPictures = ['https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1619995745882-f4128ac82ad6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1457364983758-510f8afa9f5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1516850228053-a807778c4e0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1597933437986-5b61315e70fc?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://img.freepik.com/foto-gratis/fondo-pantalla-abstracto-nebulosa-ultra-detallado-7_1562-752.jpg?t=st=1721137350~exp=1721140950~hmac=f8fffec7cec8c52261ebe43d9b03984a7af1de510cfbfe4d5ff5370024d590d0&w=1380','https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1533680635069-35927f241ead?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']


const getHour = () => {
    let getHour = new Date()
    const hour = (getHour.getHours() * 100) + getHour.getMinutes()
    
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second : '2-digit',
        hour12: false
    }
    const dateEnglishBritain = getHour.toLocaleDateString('en-GB')
    date.innerHTML = dateEnglishBritain
    console.log(hour);
    if (hour > 0 && hour <= 700) {
        message.textContent = 'Es hora de descansar. Apaga y sigue mañana.'
    } else if (hour > 700 && hour <= 1200) {
         message.textContent = 'Buenos días, desayuna fuerte y a darle al código.'
    } else if (hour > 1200 && hour <= 1400) {
        message.textContent = 'Echa un rato más pero no olvides comer.'
    } else if (hour > 1400 && hour <= 1600 ) {
        message.innerText = 'Espero que hayas comido.'
    } else if (hour > 1600 && hour <= 1800) {
        message.textContent = 'Buenas tardes, el último empujón.'
    } else if (hour > 1800 && hour <= 2000) {
        message.textContent = 'Esto ya son horas extras, ... piensa en parar pronto.'
    } else if (hour > 2000 && hour <= 2400) {
        message.textContent = 'Buenas noches, es hora de pensar en parar y descansar.'
    } 
   

    return getHour.toLocaleTimeString('en-GB',options)

}

const updateTime = () => {
    const update = getHour();
    hour.innerHTML = update
}
const changeBackground = () => {
    const body = document.body
    const randomNumber = Math.floor(Math.random() * backgroundPictures.length)
    console.log(randomNumber);
    body.style.backgroundImage = `url(${backgroundPictures[randomNumber]})`
    
}
setInterval(changeBackground,5000)

getHour()
setInterval(updateTime,1000)

// Aparecerán unas frases dependiendo un intervalo de horas. Doy una de ejemplo aunque puedes cambiarlas a tu gusto:
// Desde las 00:01 hasta las 07:00 Es hora de descansar. Apaga y sigue mañana
// Desde las 07:01 hasta las 12:00 Buenos días, desayuna fuerte y a darle al código
// Desde las 12:01 hasta las 14:00 Echa un rato más pero no olvides comer
// Desde las 14:01 hasta las 16:00 Espero que hayas comido
// Desde las 16:01 hasta las 18:00 Buenas tardes, el último empujón
// Desde las 18:01 hasta las 22:00 Esto ya son horas extras, ... piensa en parar pronto
// Desde las 22:01 hasta las 00:00 Buenas noches, es hora de pensar en parar y descansar