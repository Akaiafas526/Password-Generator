// Assignment Code
let generateBtn = document.querySelector("#generate");

//  GLobal Variables

// character Values
let special = ('!', '&', '$', '#', '@', '*','+','?');
// Number Values
let number = ('1','2','3','4','5','6','7','8','9','0');
// Uppercase Values
let upperCase = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
// Lowercase Values
let lowerCase = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
// Chosen character Values
let chosencharacter = ('');

function generatePassword() {
  let passwordStr = ('');
  let passwordlength = prompt('Choose a length for your password between 8 & 128');
  
  return passwordStr;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
