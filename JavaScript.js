// initailising varibels by getting them from html code
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var lenght = document.getElementById("lenght");

//showing the error box  
myInput.onfocus = function(){
    document.getElementById("error").style.display = "block"
}

//remove the eeror box from the screen
muImput.onblur = function(){
    document.getElementById("error").style.display = "none"
}


