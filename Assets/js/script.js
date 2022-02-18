// Assignment Code
let generateBtn = document.querySelector("#generate");

//  GLobal Variables
let enter
let uppercaseConfirm
let numberConfirm
let characterConfirm

// character Values
let character = ('!', '&', '$', '#', '@', '*','+','?')
// Number Values
let number = ('1','2','3','4','5','6','7','8','9','0')
// 
let charupperCase = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')
// 
let charlowerCase = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')

function generatePassword() {
  let passwordSTR;
  
  return password;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
