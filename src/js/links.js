
const inputSubmit = document.getElementById('inputSubmit')
const pageName = document.getElementById('pageName')
const pageUrl = document.getElementById('url')
inputSubmit.addEventListener('click',(e) => saveData(e) )

const saveData = (e) => {
    e.preventDefault() //Prevenimos el evento que genera el form que es reiniciar la pagina.
    const inputData = {
        pageName : pageName.value, //Nombre pagina
        pageUrl :pageUrl.value //URL
    }
    const getLocalData  = localStorage.getItem('links') //recuperamos los datos almacenados en el localStorage.
    const arrayOfLinks = getLocalData ? JSON.parse(getLocalData) : [] //Parsemos el string del localStorage o creamos un array si no existe.
    
    arrayOfLinks.push(inputData) //Inyectamos los valores del usuario
   
    localStorage.setItem('links',(JSON.stringify(arrayOfLinks))) //Actualizamos el valor del localStorage.
    
    pageName.value = '' //Limpiamos el input
    pageUrl.value = ''//Limpiamos el input
    showItems() //Llamamos function para renderizar
}

const renderItems = () => {
    const itemContainer = document.getElementById('link-container--list')
    const getLocalData = JSON.parse(localStorage.getItem('links'))//llamamos a localstorage para ver si existe.
    
    itemContainer.innerHTML = '' //vaciamos container

    const itemToRender = getLocalData.map((item)=> {
        const {pageName,pageUrl} = item //destructuramos el valor de item para almacenarlo en variables separadas.
        
        return (`<li>
                    <a  href="${pageUrl}" target='_blank'>${pageName}</a>
                    <img src='https://www.google.com/s2/favicons?domain=${pageUrl}' alt='${pageName}'>
                    <div id="${pageUrl}" class="close">x</div>
                </li>`)
    }).join('') //Almacenamos cada html para renderizar
    
    itemContainer.innerHTML = itemToRender //Inyectamos html en el contenedor
}

const addEvenListeners = () => {
    const deleteButton = document.querySelectorAll('.close')
    
    deleteButton.forEach(butt => butt.addEventListener('click',(e) => {
        deleteItem(e)
    }))
}

//function para eliminar los elementos
const deleteItem = (e) => {  
    const getLocalData = JSON.parse(localStorage.getItem('links'))// solicitamos data al localstorage
    const itemToDelete =  e.target.id // obtenemos el id del al que se realiza click
    
    const arrayFiltered = getLocalData.filter(item => item.pageUrl !== itemToDelete) //Eliminamos el elemento del localstorage que coincida con el target. 

    localStorage.setItem('links',JSON.stringify(arrayFiltered))//Almacenamos en localStorage el nuevo array filtrado
    showItems() //Llamamos showItem para iniciar el rederizado

}
//function para llamar el renderizado y agregar los listeners
const showItems = () => {
    renderItems()
    addEvenListeners()
}
showItems()//Iniciamos el script





















const loadItems = () => {
    const getLocalData = JSON.parse(localStorage.getItem('links'))
    console.log('fasfas');
    getLocalData.forEach((item)=> {
        const {pageName,pageUrl} = item
        itemContainer.innerHTML += `<li>
                                        <a  href="${pageUrl}" target='_blank'>${pageName}</a>
                                        <div id="${pageUrl}" class="close">x</div>
                                    </li>`
    })
    const deleteButton = document.querySelectorAll('.close')
    deleteButton.forEach(butt => butt.addEventListener('click',(e) => {
        deleteItem(e)
    }))
}