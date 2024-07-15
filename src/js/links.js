
const inputSubmit = document.getElementById('inputSubmit')

const itemContainer = document.getElementById('link-container--list')

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
                                        <a  href="${pageName}" target='_blank'>${pageName}</a>
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