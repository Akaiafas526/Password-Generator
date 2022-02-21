// ================
// GLOBAL VARIABLES
// ================
// STEP 1
// Create special character set using array
// Create numeric character set using array
// Create uppercase character set ising array
// Create lowercase character set using array

function generatePassword() {

  // STEP 2
  // Create a variable to store the length of password user entered with window prompt
  // Check if the length meets the minimim of 8 chars and the maximum of 128 chars
  // If it fails the requirements, alert the user then return to the caller

  // STEP 3
  // Create an option variable for special chars to store true or false returned from windeow confirm
  // Create an option variable for numeric chars to store true or false returned from windeow confirm
  // Create an option variable for lowercase chars to store true or false returned from windeow confirm
  // Create an option variable for uppercase chars to store true or false returned from windeow confirm

  // STEP 4
  // Creates an array pool to contain all characters in the chosen character set options and iniiialize it to an empty array, []
  // - If the option for a given character type (set) is true, add the characters in the char set to the array pool
  // - Perform the above task for all four character types (sets)

  // STEP 5
  // Create an array variable for password and initialize it to an empty array []

  // Ietrate thru 'for' loop for the length of the password
  /*
    In each iteration
      Create an random index from the array pool in step 4
      Add the char chosen with the random index from the array pool to the password array varialbe from step 5
  */

  // STRP 6
  // Check to make sure we include at least one char from the charater type (set) user chose to inclue in the password
  //    by creating a guarranty array which contains one char from each chose char type
  // Replace the exact number of chars in the password array with the chars in the guarranty array

  // STEP 7
  // Convert the password array to a password string
  // Return the password string to the caller

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
