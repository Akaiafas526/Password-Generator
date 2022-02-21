// Assignment Code
let generateBtn = document.querySelector("#generate");

//  GLobal Variables

// Character Values
let special = ['!', '&', '$', '#', '@', '*', '+', '?'];
// Number Values
let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
// Uppercase Values
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Lowercase Values
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Chosen character Values
let finalChosenCharacter = [];
// let array = new Array

let passwordLength = prompt('Choose a length for your password between 8 & 128 characters.');

while (passwordLength > 128 || passwordLength < 8) {
  alert('Password should be greater than 8 characters and less than 128.')
  passwordLength = prompt('Choose a length for your password between 8 & 128 characters.');
}

let specialBoolean = confirm('Do you want special characters?');
let numberBoolean = confirm('Do you want numbers?');
let uppercaseBoolean = confirm('Do you want uppercase?');
let lowercaseBoolean = confirm('Do you want lowercase?');

if (specialBoolean) {
  finalChosenCharacter = finalChosenCharacter.concat(special);
}

if (numberBoolean) {
  finalChosenCharacter = finalChosenCharacter.concat(number);
}

if (uppercaseBoolean) {
  finalChosenCharacter = finalChosenCharacter.concat(upperCase);
}

if (lowercaseBoolean) {
  finalChosenCharacter = finalChosenCharacter.concat(lowerCase)
}

finalChosenCharacter;

console.log(finalChosenCharacter);

let newPassword = '';

for (let i = 0; i < passwordLength; i++) {
  let randomIndex = Math.floor(Math.random() * finalChosenCharacter.length);
  let randomCharacters = finalChosenCharacter[randomIndex];
  newPassword = newPassword.concat(randomCharacters);

  
}



function generatePassword() {
  let passwordStr = '';
  console.log(passwordStr)

  // if (specialBoolean) {
  //   finalChosenCharacter = finalChosenCharacter.concat(special);
  // }

  // if (numberBoolean) {
  //   finalChosenCharacter = finalChosenCharacter.concat(number);
  // }

  // if (uppercaseBoolean) {
  //   finalChosenCharacter = finalChosenCharacter.concat(upperCase);
  // }

  // if (lowercaseBoolean) {
  //   finalChosenCharacter = finalChosenCharacter.concat(lowerCase)
  // }

  // finalChosenCharacter;

  // console.log(finalChosenCharacter);

  // let newPassword = '';

  // for (let i = 0; i < passwordLength; i++) {
  //   let randomIndex = Math.floor(Math.random() * finalChosenCharacter.length);
  //   let randomCharacters = finalChosenCharacter[randomIndex];
  //   newPassword = newPassword.concat(randomCharacters);
  // }


  return passwordStr;
}

generatePassword()

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generatePassword);

