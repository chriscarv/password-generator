// initialized variables for all possible possible characters
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const numbers = "012345678";
const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate password function
function generatePassword(){
// variable to be returned
var passwordvalue="";
// emtpy string to store appended string value
var placeholder="";

var length = window.prompt("Choose a password length between 8 and 128 characters");
// check if password length is number
if(isNaN(length)){
  window.alert("Not a number. please try again.");
  return;
}
// check if password length is valid
if(length < 8 || length > 128){
  window.alert("password must between 8 and 128 characters. try again")
  return;
}
// get character types for password from user
// if true, character types appended to placeholder string 
var upper = window.confirm("would you like to include uppercase characters?");
if(upper){
  placeholder += upperAlpha;
  console.log(upper);
}

var lower = window.confirm("would you like to include lowercase characters?");
if(lower){
  placeholder += lowerAlpha;
  console.log(lower);
}

var num = window.confirm("would you like to inlcude numbers?");
if(num){
  placeholder += numbers;
  console.log(num);
}

var special = window.confirm("would you like to include specail characters?");
if(special){
  placeholder += symbols;
  console.log(num);
}
// check if at least one choice is true
if(upper == false && lower == false && num == false && special == false)
{
  window.alert("sorry. you must choose at least one of the following choices to continue. try again.");
  return;
}
// iterate loop for password length and append random result to passwordvalue string. then return passwordvalue
for(var i=0; i < length; i++){
  var ranndomNumber = Math.floor(Math.random() * placeholder.length);
  passwordvalue += placeholder.substring(ranndomNumber, ranndomNumber +1);
}
console.log(passwordvalue);
return passwordvalue;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
