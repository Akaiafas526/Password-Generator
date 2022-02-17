// ================
// Global Variables
// =================
// STEP 1
// Create special character set using array
// Create numeric character set using array
// Create uppsercase character set using array
// Create lowercase character set using array

// STEP 2
// Create a variable for the length of password
// create variables and store users choice for special characters, nuumbers, uppercase and lowercase characters
// Create a result variable to store password characters chosen from the array pool

// STEP 3
// Collect user input for password length using window prompt
// Collect user options for options for special characters, numbers, uppercase and lowercase using window confirm

// STEP 4
// Create an array containing all chosen character sets

// STEP 5
// Create for loop interation  with length input by user
// For each iteration ... create a random index from the array pool
// Append the character chosen with the random index from the array pool to the password result variable

// STEP 6
// check to make sure we include all the characters from the character set user chose to include in the password

// STEP 7
// return the result to the caller

function generatePassword() {
  let passwordSTR;
  // STEP 2
// Create a variable for the length of password
// create variables and store users choice for special characters, nuumbers, uppercase and lowercase characters
// Create a result variable to store password characters chosen from the array pool

  return password;
}


// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
