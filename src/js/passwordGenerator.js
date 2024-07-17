const generateButton = document.getElementById('generateButton')
const numberInput = document.getElementById('numberInput')
const passwordText = document.getElementById('passwordText')
const showPassword = document.getElementById('password')

const capitalizeLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const lowerCase = [...'abcdefghijklmnopqrstuvwxyz'];
const numbers = [...'0123456789'];
const simbols = [...'!@#$%^&*()-_=+'];


generateButton.addEventListener('click',()=>{
    const number = numberInput.value 
    const arrayAllElements = [capitalizeLetters,lowerCase,numbers,simbols]
    const password = []
    
    if (number < 12 || number > 50 ) return alert('Debes ingresar un numero entre 12 y 50.')

    for (let i = 0; i < number; i++) {
        const allArrayTogether = [...arrayAllElements].join('').split(',')
        const random = randomNumber(allArrayTogether.length)

        i < 4 ? password.push(arrayAllElements[i][randomNumber(arrayAllElements[i].length)]) : password.push(allArrayTogether[random])   
    }

    passwordText.innerText = password.join('')
    showPassword.classList.add('showPassword')
})

const randomNumber = (max) => {
    return Math.floor(Math.random() * max)
}