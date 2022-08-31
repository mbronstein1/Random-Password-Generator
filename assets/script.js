// Assignment Code
var generateBtn = document.querySelector("#generate");


// //option 1
var input = Number(prompt("How many characters would you like? The number must be between 8 and 128."));
while (input < 8 || input > 128 || isNaN(input)) { 
     alert("Invalid input. Please try again.")
     var input = prompt("How many characters would you like? The number must be between 8 and 128.");
}
console.log(input);

//opton 2
// var charPrompt = parseInt(prompt("How many characters would you like?"));
// var charLength = function(x) {
//   if (x < 8) {
//     alert("The length must be greater than 8 characters");
//     parseInt(prompt("How many characters would you like?"));
//   } else if (x > 128) {
//     alert("The length must be less than 128 characters");
//   } else if (isNaN(x)) {
//     alert("That's not a number!");
//   } else {
//     console.log(x);
//   }
// }

// charLength(charPrompt);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
}

// Create generatePassword() function
// Create variables for the following: 
  // Prompt asking for number of characters w/ a min and max value w/ entered value as the argument for the length parameter
  // Confirming whether lowercase characters are allowed then either move on or remove them as options
  // Confirming whether uppercase characters are allowed then either move on or remove them as options
  // Confirming whether numeric characters are allowed then either move on or remove them as options
  // Confirming whether special characters are allowed then either move on or remove them as options
  // Alert w/ at least one of the above must be selected
// Run function w/ the selected confirmed characters and length;
// Create a variable w/ empty array
// array.length = the number entered in prompt
// Create 4 different if/else statements adding each character to a new array
// Concatenate all 4
// Add randomize order of concatArray
// When finished, return array to string without commas with array.join()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);