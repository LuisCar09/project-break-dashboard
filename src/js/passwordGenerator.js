const generateButton = document.getElementById('generateButton')
const numberInput = document.getElementById('numberInput')
const showPassword = document.getElementById('password')
const passwordText = document.getElementById('passwordText')
const capitalizeLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const lowerCase = [...'abcdefghijklmnopqrstuvwxyz'];
const numbers = [...'0123456789'];
const simbols = [...'!@#$%^&*()-_=+'];
const allCharacterSets = [capitalizeLetters,lowerCase,numbgiers,simbols]


const randomNumber = (max) => Math.floor(Math.random() * max) //Obtenemos el numero random


const generatePassword = () => {
    
    const allCharacters = allCharacterSets.flat()//Aplanamos los array para dejar un array juntos
    
    const number = numberInput.value //obtenemos el valor del input
    const password = [] //almacenaremos el password
    
    if (number < 12 || number > 50 ) return alert('Debes ingresar un numero entre 12 y 50.') // validamos que debe ser un numero entre 12 y 50
    
        for (let i = 0; i < number; i++) {
            const random = randomNumber(allCharacters.length)
            i < allCharacterSets.length ? password.push(getCharacterFromSet(allCharacterSets[i])) : password.push(allCharacters[random])   //inyeccion del password
    }
    return password.join('') //retornamosla password unida con el metodo join
} 

const getCharacterFromSet = (charactersSet) => {
    
    const random = randomNumber(charactersSet.length) // obtenemos numero random
    const element = charactersSet[random] //character seleccionado
    
    return  element //retornamos el character
}
const renderPassword = () => {
    const strongPassword = generatePassword() //recibimos la contrasena
    if (showPassword) {
        passwordText.innerText = strongPassword // mostramos la contrasena
        showPassword.classList.add('showPassword') //agregamos clase para mostrarla
    }
    
}



generateButton.addEventListener('click',renderPassword) // evento se inicia al click