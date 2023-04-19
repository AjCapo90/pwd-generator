const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const PWD_LENGTH = 30;
const NUMBER_OF_PASSWORDS = 2;
const passwords = [];

const lettersRegex = /[a-zA-Z]/;
const numbersRegex = /[0-9]/;
const symbolsRegex = /[^A-Za-z0-9]/;
const allCharsRegex = /[\s\S]/

const pwdElements = document.querySelectorAll(".pwd-el");
const copiedEl = document.getElementById("copied-el");

function generateRandomPwd(regex = allCharsRegex) {
    passwords.length = 0;
    const allowedCharacters = characters.filter((char) => regex.test(char));
    for(let i=0; i < NUMBER_OF_PASSWORDS; i++) {
        let password = '';
        for(let j=0; j < PWD_LENGTH; j++) {
            const randomIndex = getRandomCharacterIndex(allowedCharacters.length);
            password += allowedCharacters[randomIndex];
        }
        passwords.push(password);
        if(pwdElements[i]) {
            pwdElements[i].textContent = passwords[i]
        }
    }
}

function getRandomCharacterIndex(length) {
    return Math.floor(Math.random() * length)
}

pwdElements.forEach((pwdElement) => {
    pwdElement.onclick = function() {
        document.execCommand('copy');
    }
})

pwdElements.forEach((pwdElement) => {
    pwdElement.addEventListener("copy", function(event) {
        event.preventDefault();
          if (event.clipboardData) {
            event.clipboardData.setData("text/plain", pwdElement.textContent);
            alert(`Text copied to the clipboard: ${event.clipboardData.getData("text")}`)
            }
        })
})

