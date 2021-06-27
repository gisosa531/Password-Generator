// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Variables for generating password
    var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
    var lowerCaseChar = "abcdefghiklmnopqrsttuvwxtz" .split("");
    var numericChar = "0123456789" .split ("");
    var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|" .split("");
    var selections = [];

//Function that prompts for length of password
function generatePassword () {
  var length = prompt ("Enter how many characters long you'd like your password to be (Must be between 8-128 characters):");

  var lengthConfirm = parseInt(length);
  console.log(lengthConfirm);

//If statement that allows for choice to be a number between 8-128 characters. 
if (length < 8 || length > 128 || isNaN(length)) {
        alert (" Choice is not valid. Please try again.");
        return;
    }
//Creates a confirm window to ask user if they want to include lowercase charaters.
    var lowerCaseConfirm = confirm("Do you want your password to include lowercase letters?");
      if(lowerCaseConfirm === true) {
        for (var i = 0; i < lowerCaseChar.length; i++) {
            selections.push(lowerCaseChar[i]);
        }
    }
//Creates a confirm window to ask user if they want to include uppercase.
    var upperCaseConfirm = confirm("Do you want your password to include uppercase letters?");
    if (upperCaseConfirm === true) {
        for (var i = 0; i < upperCaseChar.length; i++) {
            selections.push(upperCaseChar[i]);
        }
    }
//Creates a confirm window to ask user if they want to include numeric.
    var numberConfirm = confirm("Do you want your password to include numbers");
    if (numberConfirm === true) {
        for (var i = 0; i < numericChar.length; i++) {
            selections.push(numericChar[i]);
        }
    }
//Creates a confirm window to ask user if they want to include special characters.
    var specialConfirm = confirm("Do you want your password to include special characters?");
    if (specialConfirm === true) {
        for (var i = 0; i < specialChar.length; i++) {
            selections.push(specialChar[i]);
        }
    }
    var randomPassword = "";

//This for loop uses the 4 booleans and number choice to generate new password
 for (var i = 0; i < lengthConfirm; i++) {
     selections[
         Math.floor(Math.random() * selections.length)];
     randomPassword +=
        selections[
            Math.floor(Math.random() * selections.length)
        ];
    }
    return randomPassword;
  }
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
