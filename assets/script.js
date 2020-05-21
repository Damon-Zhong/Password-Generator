// Assignment Code
var generateBtn = document.querySelector("#generate");

//display selected password length
var slider = document.getElementById("charNum");
var output = document.getElementById("passwordLength");
output.innerHTML = slider.value;
slider.oninput = function() {
output.innerHTML = this.value;
}

//Display criteria form when 'Generate Passowrd' clicked
function showCriteria(){
  document.getElementById("password").style.display = "none";
  document.getElementById("criteria").style.display = "block";
}

// Add event listener to generate button
generateBtn.addEventListener("click", showCriteria);

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

//Expand character set based on checkboxes
function expandCharset(){
    var charset = "";
    var lowercasechar = "abcdefghijklmnopqrstuvwxyz";
    var uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var specialchar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    if(document.getElementById("lowercase").checked == true){
        charset += lowercasechar;
      }
    if(document.getElementById("uppercase").checked == true){
        charset += uppercasechar;

      }
    if(document.getElementById("numeric").checked == true){
        charset += number;
      }
    if(document.getElementById("specialChar").checked == true){
        charset += specialchar;
      }

      return charset;

    }

//Add event listener to submit button
document.getElementById("submit").addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#generate");

  passwordText.value = password;

}

//Generate passowrd based on criteria
function generatePassword(){
  var pwset = "";
  var charset = expandCharset();
  
  // 
  
  for (i=0; i<slider.value; i++){
    
    var randomchar = charset[Math.round(Math.random()*charset.length)];
    pwset += randomchar;
    console.log(randomchar);
  }

  document.getElementById("password").innerHTML = pwset;

  return pwset;


}

// 