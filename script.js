// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // GIVEN I need a new, secure password
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword () {
    // prompt for the length of the password
    var passLength = prompt("Please select number of characters. \nMust be between 10 - 120 characters.");
    
    var lengthConfirm = parseInt(passLength);
    console.log(lengthConfirm);
 
// choose a length of at least 10 characters and no more than 120 characters
    if (passLength < 10 || passLength > 120|| isNaN(passLength)) {
        alert ("Error. Invalid entry. Please try again.");
        return;
    }

var allChar = [];
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowerCaseChar = "abcdefghiklmnopqrsttuvwxtz" ;
var numberChar = "0123456789";
var specialChar = "*&^%$#@!?><{}"; 


// use confirm to ask user if they want to include owercase
var lowerCaseConfirm = confirm("Include lowercase letters?");
    if(lowerCaseConfirm === true) {
        for (var i = 0; i < lowerCaseChar.length; i++) {
            allChar.push(lowerCaseChar[i]);
        }
    }
// use confirm to ask user if they want to include uppercase
var upperCaseConfirm = confirm("include uppercase letters?");
    if (upperCaseConfirm === true) {
        for (var i = 0; i < upperCaseChar.length; i++) {
            allChar.push(upperCaseChar[i]);
        }
    }
// use confirm to ask user if they want to include numbers
var numberConfirm = confirm("Include numbers?");
    if (numberConfirm === true) {
        for (var i = 0; i < numberChar.length; i++) {
            allChar.push(numberChar[i]);
        }
    }
// use confirm to ask user if they want to include special characters    
var specialConfirm = confirm("Include special characters?");
    if (specialConfirm === true) {
        for (var i = 0; i < specialChar.length; i++) {
            allChar.push(specialChar[i]);
        }
    }

// using the number from above and 4 booleans, create password
 var randomPassword = "";
 for (var i = 0; i < lengthConfirm; i++) {
     allChar[
         Math.floor(Math.random() * allChar.length)];
     randomPassword +=
        allChar[
            Math.floor(Math.random() * allChar.length)
        ];
    }
 return randomPassword;
}

var copyBtn = document.querySelector("#copy")
function copyPassword() {
    
    copyBtn.addEventListener("click", ClipboardEvent);
// added click events
}

generateBtn.addEventListener("click", writePassword);