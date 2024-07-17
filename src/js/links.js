
const inputSubmit = document.getElementById('inputSubmit')

const itemContainer = document.getElementById('link-container--list')

// const backgroundPictures = ['https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1619995745882-f4128ac82ad6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1457364983758-510f8afa9f5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1516850228053-a807778c4e0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1597933437986-5b61315e70fc?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://img.freepik.com/foto-gratis/fondo-pantalla-abstracto-nebulosa-ultra-detallado-7_1562-752.jpg?t=st=1721137350~exp=1721140950~hmac=f8fffec7cec8c52261ebe43d9b03984a7af1de510cfbfe4d5ff5370024d590d0&w=1380','https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1533680635069-35927f241ead?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.pexels.com/photos/6000789/pexels-photo-6000789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']

console.log(backgroundPictures);

const pageName = document.getElementById('pageName')
const pageUrl = document.getElementById('url')
inputSubmit.addEventListener('click',(e) => saveData(e) )

const saveData = (e) => {
    e.preventDefault()
    const inputData = {
        pageName : pageName.value,
        pageUrl :pageUrl.value
    }
    const getLocalData  = localStorage.getItem('links') 
    const arrayOfLinks = getLocalData ? JSON.parse(getLocalData) : []
    
    arrayOfLinks.push(inputData)
   
    localStorage.setItem('links',(JSON.stringify(arrayOfLinks)))
    
    pageName.value = ''
    pageUrl.value = ''
    showItems()
}
const showItems = () => {
    const getLocalData = JSON.parse(localStorage.getItem('links'))
    console.log(getLocalData);
    itemContainer.innerHTML = ''
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
const deleteItem = (e) => {  
    const getLocalData = JSON.parse(localStorage.getItem('links'))
    const itemToDelete =  e.target.id
    console.log(itemToDelete);
    const arrayFiltered = getLocalData.filter(item => item.pageUrl !== itemToDelete) 

    localStorage.setItem('links',JSON.stringify(arrayFiltered))
    showItems()

}
// const changeBackground = () => {
//     const body = document.body
//     const randomNumber = Math.floor(Math.random() * backgroundPictures.length)
//     console.log(randomNumber);
//     body.style.backgroundImage = `url(${backgroundPictures[randomNumber]})`
    
// }
// setInterval(changeBackground,5000)
showItems()





















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