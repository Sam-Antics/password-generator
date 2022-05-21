// Assignment Code
var generateBtn = document.querySelector("#generate");



// When the "generate password" button is clicked ...
function generatePassword () {
  
  // User is prompted for number of chars in the pw (8 - 128)
  var charLength = window.prompt("How many characters for your password?\n    (Minimum is 8, maximum is 128)");
  //make sure charLength criteria is met
  if (isNaN(charLength)) {
    window.alert("Please enter a number (8-128.");
    return generatePassword();
  }
  if (charLength < 8 || charLength > 128) {
    window.alert("Please enter a number between 8 and 128.");
    return generatePassword();
  }
  
  
  // User is prompted to confirm Uppercase letters
  var confirmUpper = window.confirm("Would you like to include Uppercase letters?");
  
  // User is prompted to confirm Lowercase letters
  var confirmLower = window.confirm("Would you like to include Lowercase letters?");
  
  // User is prompted to confirm numeric chars
  var confirmNumeric = window.confirm("Would you like to include Numeric characters?");
  
  // User is prompted to confirm special chars
  var confirmSpecial = window.confirm("Would you like to include Special characters?");
  
  // User's choices are validated and at least one char type should have been selected
  if (!confirmUpper && !confirmLower && !confirmNumeric && !confirmSpecial) {
    window.alert("Please choose at least one character type.");
    return generatePassword();
  }
}
// Password is generated that matches selected criteria

// Password is "written in the 'Your Secure Password' box"
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
