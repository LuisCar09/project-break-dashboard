const hourContainer = document.getElementById('hour')
const dateContainer = document.getElementById('date')
const message = document.getElementById('message')
const mainContainer = document.querySelector('.main-container')
const timeFormtOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second : '2-digit',
    hour12: false
}
const getHour = () => {
    const dayDate = new Date()
    const dateEnglishBritain = dayDate.toLocaleDateString('en-GB')
    const currentTime = (dayDate.getHours() * 100) + dayDate.getMinutes()
    
    
    dateContainer.innerText = dateEnglishBritain
     
    if (!mainContainer ) {
       message.innerText = getMessage(currentTime)
    }
    const updateHour = dayDate.toLocaleTimeString('en-GB',timeFormtOptions)
    hourContainer.innerHTML = updateHour
}

const getMessage = (currentTime) => {
    
    if (currentTime > 0 && currentTime <= 700) {
        return  'Es hora de descansar. Apaga y sigue mañana.'
    } else if (currentTime > 700 && currentTime <= 1200) {
         return  'Buenos días, desayuna fuerte y a darle al código.'
    } else if (currentTime > 1200 && currentTime <= 1400) {
        return  'Echa un rato más pero no olvides comer.'
    } else if (currentTime > 1400 && currentTime <= 1600 ) {
        message.innerText = 'Espero que hayas comido.'
    } else if (currentTime > 1600 && currentTime <= 1800) {
        return  'Buenas tardes, el último empujón.'
    } else if (currentTime > 1800 && currentTime <= 2000) {
        return  'Esto ya son horas extras, ... piensa en parar pronto.'
    } else if (currentTime > 2000 && currentTime <= 2400) {
        return  'Buenas noches, es hora de pensar en parar y descansar.'
    } 
}



getHour()
setInterval(getHour,1000)

// Aparecerán unas frases dependiendo un intervalo de horas. Doy una de ejemplo aunque puedes cambiarlas a tu gusto:
// Desde las 00:01 hasta las 07:00 Es hora de descansar. Apaga y sigue mañana
// Desde las 07:01 hasta las 12:00 Buenos días, desayuna fuerte y a darle al código
// Desde las 12:01 hasta las 14:00 Echa un rato más pero no olvides comer
// Desde las 14:01 hasta las 16:00 Espero que hayas comido
// Desde las 16:01 hasta las 18:00 Buenas tardes, el último empujón
// Desde las 18:01 hasta las 22:00 Esto ya son horas extras, ... piensa en parar pronto
// Desde las 22:01 hasta las 00:00 Buenas noches, es hora de pensar en parar y descansar


