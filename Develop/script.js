// Assignment code here
var upper;
var lower;
var num;
var special;
var passwordLength;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generateBtn.onclick = function()
{
  passwordLength = window.prompt("Enter a number between 8 and 128 for your password length");
if(passwordLength < 8 || passwordLength > 128)
{
  passwordLength = window.prompt("Enter a number between 8 and 128 for your password length");
}

if (confirm("Would you like to use uppercase characters")){
  upper = true;
  console.log(upper);
}
else{
  upper = false;
  console.log(upper);
}
if (confirm("Would you like to to use lowercase characters")){
  lower = true;
  console.log(lower);
}
else {
  lower = false;
  console.log(lower);
}
if(confirm("Would you like to use numbers?")){
  num = true;
  console.log(num);
}
else{
  num = false;
  console.log(num);
}
if(confirm("Would you like to use specail characters?")){
  special = true;
  console.log(special);
}
else{
  special = false;
  console.log(special);
}
console.log(passwordLength);
if (upper == false && lower == false && num == false && special == false){
  window.alert("choose at least one of these options");
  generateBtn.onclick();
}
}

