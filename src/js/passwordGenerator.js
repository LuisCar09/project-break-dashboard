const generateButton = document.getElementById('generateButton')
const numberInput = document.getElementById('numberInput')
const showPassword = document.getElementById('password')
const passwordText = document.getElementById('passwordText')
const capitalizeLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const lowerCase = [...'abcdefghijklmnopqrstuvwxyz'];
const numbers = [...'0123456789'];
const simbols = [...'!@#$%^&*()-_=+'];
const allCharacterSets = [capitalizeLetters,lowerCase,numbers,simbols]


const randomNumber = (max) => Math.floor(Math.random() * max)


const generatePassword = () => {
    
    const allCharacters = allCharacterSets.flat()//Aplanamos los array para dejar un array juntos
    const number = numberInput.value 
    const password = []
    
    if (number < 12 || number > 50 ) return alert('Debes ingresar un numero entre 12 y 50.')
    
        for (let i = 0; i < number; i++) {
            const random = randomNumber(allCharacters.length)
            i < allCharacterSets.length ? password.push(getCharacterFromSet(allCharacterSets[i])) : password.push(allCharacters[random])   
    }
    return password.join('')
} 

const getCharacterFromSet = (charactersSet) => {
    
    const random = randomNumber(charactersSet.length)
    const element = charactersSet[random]
    
    return  element
}
const renderPassword = () => {
    const strongPassword = generatePassword()
    if (showPassword) {
        passwordText.innerText = strongPassword
        showPassword.classList.add('showPassword')
    }
    
}



generateButton.addEventListener('click',renderPassword)