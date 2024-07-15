const hour = document.getElementById('hour')
const date = document.getElementById('date')
const message = document.getElementById('message')
console.log(message);
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