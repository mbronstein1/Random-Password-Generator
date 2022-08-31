// Assignment Code
var generateBtn = document.querySelector("#generate");


// Prompt popup asking for numbers of characters w/ min/max value -- stored in numChar variable
var numChar;
var numCharPrompt = function(input) {
  input = Number(prompt("How many characters would you like? The number must be between 8 and 128."));
  while ((input < 8) || (input > 128) || (isNaN(input))) { 
      alert("Invalid input. Please try again.")
      var input = prompt("How many characters would you like? The number must be between 8 and 128.");
  }
  numChar = input;
  return numChar;
};
numCharPrompt();

//Confirm popups confirming whether to use uppercase, lowercase, numeric, and special characters
//--------------------------
// OPTION 1 - Confirming characters and converting to array w/ commas -- stored in array1, array2, array3, and array4 respectively
// var array1 = [];
// var lowerChar = function() {
//   var lowerCase = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
//   if (confirm("Would you like to use lowercase characters?")) {
//     array1 = array1.concat(lowerCase.split(""));
//   }
//   return array1;
// };
// lowerChar();

// var array2 = [];
// var upperChar = function() {
//   var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   if (confirm("Would you like to use lowercase characters?")) {
//     array2 = array2.concat(upperCase.split(""));
//   }
//   return array2;
// };
// upperChar();

// var array3 = [];
// var numChar = function() {
//   var numbers = "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
//   if(confirm("Would you like to use number characters?")) {
//     array3 = array3.concat(numbers.split(""));
//   }
//   return array3;
// };
// numChar();

// var array4 = [];
// var specChar = function() {
//   var special = "!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?"
//   if(confirm("Would you like to use special characters?")) {
//     array4 = array4.concat(special.split(""));
//   }
//   return array4;
// };
// specChar();
//----------------------------------------------

// OPTION 2 (PREFERRED) - Confirming characters and leaving as strings for now (will need to concat w/ "+", convert to giant array w/ split(""), randomize and sort, and convert back to string w/ .join("")) -- stored in upperCase, lowerCase, number, and special respectively.
var upperCase;
var upperChar = function() {
  if (confirm("Would you like to use lowercase characters?")) {
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return upperCase;
};
upperChar();

var lowerCase;
var lowerChar = function() {
  if (confirm("Would you like to use lowercase characters?")) {
    lowerCase = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  }
  return lowerCase;
};
lowerChar();

var number;
var numChar = function() {
  if(confirm("Would you like to use number characters?")) {
    number = "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
  }
  return number;
};
numChar();
 
var special;
var specChar = function() {
  if(confirm("Would you like to use special characters?")) {
    special = `!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?`;
  }
  return special;
};
specChar();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generatePassword function
function generatePassword() {
}

// Create generatePassword() function
//(DONE) Create variables for the following:
  //(DONE) Prompt asking for number of characters w/ a min and max value w/ entered value as the argument for the length parameter
  //(DONE) Confirming whether lowercase characters are allowed then either move on or remove them as options
  // (DONE) Confirming whether uppercase characters are allowed then either move on or remove them as options
  // (DONE) Confirming whether numeric characters are allowed then either move on or remove them as options
  // (DONE) Confirming whether special characters are allowed then either move on or remove them as options
  // Alert w/ at least one of the above must be selected
// Concat all available strings into giant string and assign it as a new variable
// Convert giant string to giant array using .split("");
// Randomize and sort giant array;
//.splice() or .slice() starting from 0 and moving to the value of numChar;
// When finished, return array to string without commas with array.join("");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);