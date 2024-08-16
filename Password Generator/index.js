const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

const specialCharacters = [
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const passwordEl = document.getElementById("password-el");
const password1El = document.getElementById("password1-el");
const specialCharactersToggle = document.getElementById("special-characters-toggle");

function generatePassword(length = 15) {
    let availableCharacters = characters;

    if (specialCharactersToggle.checked) {
        availableCharacters = availableCharacters.concat(specialCharacters);
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
    }
    return password;
}

function displayPasswords() {
    passwordEl.textContent = generatePassword();
    password1El.textContent = generatePassword();
}
