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
    const dayDate = new Date() //obtemmos la fecha
    const dateEnglishBritain = dayDate.toLocaleDateString('en-GB') // obtenemos el date pasando el GB parametro para obtener la fecha formato 01/07/2024
    const currentTime = (dayDate.getHours() * 100) + dayDate.getMinutes() // obtenemos el tiempo convirtiendolo en numeros
    
    
    dateContainer.innerText = dateEnglishBritain // renderizamos la fecha
     
    if (!mainContainer ) {
       message.innerText = getMessage(currentTime) // insertamos los mensajes si no estamos en la contenedor que muestra todos las section
    }
    const updateHour = dayDate.toLocaleTimeString('en-GB',timeFormtOptions) //Obtenemos la hora en 24:00 formato
    hourContainer.innerHTML = updateHour //actualizamos la hora
}

//Devolver un mensaje de acuerdo al la hora
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



getHour()//Inicialziacion
setInterval(getHour,1000)//Llamamos a la funcion cada segundo para actualizar la hora

// Aparecerán unas frases dependiendo un intervalo de horas. Doy una de ejemplo aunque puedes cambiarlas a tu gusto:
// Desde las 00:01 hasta las 07:00 Es hora de descansar. Apaga y sigue mañana
// Desde las 07:01 hasta las 12:00 Buenos días, desayuna fuerte y a darle al código
// Desde las 12:01 hasta las 14:00 Echa un rato más pero no olvides comer
// Desde las 14:01 hasta las 16:00 Espero que hayas comido
// Desde las 16:01 hasta las 18:00 Buenas tardes, el último empujón
// Desde las 18:01 hasta las 22:00 Esto ya son horas extras, ... piensa en parar pronto
// Desde las 22:01 hasta las 00:00 Buenas noches, es hora de pensar en parar y descansar


