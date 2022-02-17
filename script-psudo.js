// ================
// GLOBAL VARIABLES
// ================
// STEP 1
// Create special character set using array
// Create numeric character set using array
// Create uppercase character set ising array
// Create lowercase character set using array

// STEP 2
// Create a variable for the length of password
// Create variables to store user's choice for special chars, numbers, uppercase, and lowercase chars
// Create a result variable to store password chars chosen from the array pool

// STEP 3
// Collect user input for password length using window prompt
// Collect user options for special chars, numbers, uppercase, and lowercase using window confirm

// STEP 4
// Creates a pool containing all characters in the chosen character sets using array

// Create for loop iterated with length input by user
/*
  For each iteration
    Create an random index from the array pool
    Append the char chosen with the random index from the array pool to the password result varialbe
*/

// STRP 5
// Check to make sure we include all the chars from the charater sets user chose to inclue in the password

// STEP 6
// Return the result to the caller

function generatePassword() {
  var passwordStr; //


  return passwordStr;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
