// Assignment Code
var generateBtn = document.querySelector("#generate");

//display selected password length
var slider = document.getElementById("charNum");
var output = document.getElementById("passwordLength");
output.innerHTML = slider.value;
slider.oninput = function() {
output.innerHTML = this.value;
}

//Check if character type(s) selected
function CheckBox() {
  if(document.getElementById("lowercase").checked == true ||
  document.getElementById("uppercase").checked == true ||
  document.getElementById("numeric").checked == true ||
  document.getElementById("specialChar").checked == true
  ){
          document.getElementById("criteria").style.display = "none";
          document.getElementById("password").style.display = "block";
      } else {
          alert(`None of character types is selected, please select at least one.`);
      }
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  document.getElementById("password").style.display = "none";
  document.getElementById("criteria").style.display = "block";

  passwordText.value = `${output.value}`;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//
function generatePassword(){


}

