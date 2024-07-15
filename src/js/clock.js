const hour = document.getElementById('hour')
const date = document.getElementById('date')

const getHour = () => {
    let getHour = new Date()
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second : '2-digit',
        hour12: false
    }
    const dateEnglishBritain = getHour.toLocaleDateString('en-GB')
    
    date.innerHTML = dateEnglishBritain
    
    

    return getHour.toLocaleTimeString('en-GB',options)

}

const updateTime = () => {
    const update = getHour();
    hour.innerHTML = update
}

getHour()
setInterval(updateTime,1000)
// setTimeout(()=>{
//     clearInterval(interval)
// },10000)

//esto es para tener una idea como afrontar el condicional