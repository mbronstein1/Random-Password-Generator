// My Pseudocode steps for solution code:
    //(DONE)Create generatePassword() function and place all code inside;
    //(DONE) Create the following popups for the user to interact with:
      //(DONE) Prompt asking for number of characters w/ a min and max value w/ entered value as the argument for the length parameter;
        //(DONE) If input is not within parameters or is not a number, alert and try again;
      //(DONE) Confirm whether lowercase characters are allowed then either continue or remove them as options;
      //(DONE) Confirm whether uppercase characters are allowed then either continue or remove them as options;
      //(DONE) Confirm whether numeric characters are allowed then either continue or remove them as options;
      //(DONE) Confirm whether special characters are allowed then either continue or remove them as options;
       //(DONE) If none were selected, alert w/ a statement that at least one of the above must be selected and begin again;
    //(DONE) Concatenate all available strings from above prompts into giant string and assign it as a new variable;
    //(DONE) Convert giant string to giant array using .split("") and assign it as a new variable;
    //(DONE) Randomize and sort giant array and assign it as a new variable;
    //(DONE) Slice giant random array starting from 0 and moving to the value of numChar and assign a new variable;
    //(DONE) Convert sliced array back to string without commas with .join("") and assign a new variable;
    //(DONE) Return final variable!!

var generateBtn = document.querySelector("#generate");

//Create generatePassword() function
function generatePassword() {
  var numOfCharacters;
  var upperCase;
  var lowerCase;
  var number;
  var special;
  //Create prompt asking for number of characters and alert if input is invalid  
  var numOfCharactersPrompt = function(input) {
    var input = Number(prompt("How many characters would you like? The number must be between 8 and 128."));
    while ((input < 8) || (input > 128) || (isNaN(input))) { 
        alert("Invalid input. Please try again.")
        var input = prompt("How many characters would you like? The number must be between 8 and 128.");
    }
    numOfCharacters = input;
    return numOfCharacters;
  };

  // Confirming characters and reassigning variables as strings or leaving variables as empty strings if not selected in popup box
    //Created long-enough strings where if user only selects ONE of these character types that the password can still reach the maximum value of 128
  var upperChar = function() {
    if (confirm("Would you like to include uppercase characters?")) {
      upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      upperCase = "";
    }
    return upperCase;
  };

  var lowerChar = function() {
    if (confirm("Would you like to include lowercase characters?")) {
      lowerCase = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
    } else {
      lowerCase = "";
    }
    return lowerCase;
  };

  var numChar = function() {
    if(confirm("Would you like to include numeric characters?")) {
      number = "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789";
    } else {
      number = "";
    }
    return number;
  };

  var specChar = function() {
    if(confirm("Would you like to include special characters?")) {
      special = `!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?!@#$%^&*?`;
    } else {
      special = "";
    }
    return special;
  };

  // Validating that at least one confirm popup was selected, otherwise confirm popups start again
  function checkChar() {
    upperChar();
    lowerChar();
    numChar();
    specChar();
    if ((upperCase === "") && (lowerCase === "") && (number === "") && (special === "")) {
      alert("At least one character type must be selected.");
      checkChar();
    }
  };

  //Execute functions
  numOfCharactersPrompt();
  checkChar();

  // Concatenate all character strings and turn them into an array
  var concatString = upperCase + lowerCase + number + special;
  var stringToArray = concatString.split("");

  //-------------
  //Taken from StackOverflow to iterate through the array then randomize it
  //Citation: superluminary.(2017, Oct 3). "How to randomize (shuffle) a JavaScript array?". StackOverflow. https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var randomArray = stringToArray.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);

  // Create new array that contains just the number of characters inputted by user at beginning of function
  var randomArraySliced = randomArray.slice(0, numOfCharacters);

  //Return Array to String with .join("")
  var newPassword = randomArraySliced.join("");
  return newPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);