// Assignment code here

const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const numbers = "012345678";
const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate password function
function generatePassword(){
var passwordvalue="";
var placeholder="";

var length = prompt("Choose a password length between 8 and 128 characters");
if(length < 8 || length > 128){
  alert("password must between 8 and 128 characters. try again")
  return;
}

var upper = confirm("would you like to include uppercase characters?");
if(upper){
  placeholder += upperAlpha;
  console.log(upper);
}

var lower = confirm("would you like to include lowercase characters?");
if(lower){
  placeholder += lowerAlpha;
  console.log(lower);
}

var num = confirm("would you like to inlcude numbers?");
if(num){
  placeholder += numbers;
  console.log(num);
}

var special = confirm("would you like to include specail characters?");
if(special){
  placeholder += symbols;
  console.log(num);
}
if(upper == false && lower == false && num == false && special == false)
{
  alert("sorry. you must choose at least one of the following choices to continue");
  return;
}
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
