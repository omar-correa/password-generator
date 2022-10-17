// Assignment Code
var generateBtn = document.querySelector("#generate");
// created variables for each password criteria
var upperCaseValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCaseValue = "abcdefghijklmnopqrstuvwxyz"
var numValue = "0123456789"
var specialCharValue = "!@#$%^&*()_-+="

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// created function
function generatePassword() {
  // assigned the password to an initial empty string
  var userPassword = ""
  // first alert that appears when user clicks button
  window.alert("The following are a series of prompts you need to choose from in order to generate your secure password.");
  // first prompt user interacts with
  var char = window.prompt("How many characters long (between 8-128) do you want your password to be?");

  // if statement that will run if user chooses a number between 8 & 128
  if (char > 7 && char < 129) {
    // createed variables attached to confirm methods
    var upperCase = window.confirm("Do you want your password to include uppercase letters?");
    var lowerCase = window.confirm("Do you want your password to include lowercase letters?");
    var num = window.confirm("Do you want your password to include numbers?");
    var specialChar = window.confirm("Do you want your password to include special characters?");
    // added for loop so that the code repeats
    for (i = 0; i < char; i++) {

      // added second condition to run if user's character number choice is reached
      if (upperCase === true && userPassword.length < char) {
        var ucIndex = Math.floor(Math.random() * 26);
        userPassword = userPassword + upperCaseValue.charAt(ucIndex)
      }
      // added third condition to run if user's character number choice is reached
      if (lowerCase === true && userPassword.length < char) {
        var lcIndex = Math.floor(Math.random() * 26);
        userPassword = userPassword + lowerCaseValue.charAt(lcIndex)
      }
      // added fourth condition to run if user's character number choice is reached
      if (num === true && userPassword.length < char) {
        var numIndex = Math.floor(Math.random() * 10);
        userPassword = userPassword + numValue.charAt(numIndex)
      }
      // added fifth condition to run if user's character number choice is reached
      if (specialChar === true && userPassword.length < char) {
        var scvIndex = Math.floor(Math.random() * 14);
        userPassword = userPassword + specialCharValue.charAt(scvIndex)
      }
    }
    // else statement that runs if user does not choose a value between 8 & 128
  } else {
    window.alert("Please choose a number between 8 and 128")
    generatePassword();
  }
  // return statement so that the function runs
  return userPassword
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function pass() {
  var userPass = prompt("The following are password criterias")
}