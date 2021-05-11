
// initailising varibels by getting them from html code
var myInput = document.getElementById("pass");
var letter = document.getElementById("letter");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var lenght = document.getElementById("lenghtpass");

//showing the error box  
myInput.onfocus = function(){
    document.getElementById("error").style.display = "block"
}

//remove the eeror box from the screen
myInput.onblur = function(){
    document.getElementById("error").style.display = "none"
}

// typing into password feald
myInput.onkeyup = function(){
    var LowerCaseLett = /[a-z]/g;
    
    if(myInput.value.match(LowerCaseLett)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid"); 
    }
// Uppercase Letter
    var UpperCaseLett = /[A-Z]/g;

    if(myInput.value.match(UpperCaseLett)){
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
    }

// Number 
     var Num = /[0-9]/g;

     if(myInput.value.match(Num)){
         number.classList.remove("invalid");
         number.classList.add("valid");
     } else {
        number.classList.remove("valid");
         number.classList.add("invalid"); 
     }

// Pssword lenght
     if(myInput.value.lenght >= 8) {
        lenght.classList.remove("invalid");
        lenght.classList.add("valid");
    } else {
       lenghtpass.classList.remove("valid");
        lenghtpass.classList.add("invalid"); 
    }

}

document.getElementById("rundomCustomer").addEventListener('click', rundomCustomer);

function rundomCustomer(){
       fetch('https://randomuser.me/api/?results=5')
        .then ((res) => res.json())
        .then((data) => {
         let author = data.results;
         let output = '<h2> Customer</h2>'
        console.log(data);


        author.forEach(function(customer){
            output += `
           <div
               <h3>${customer.name}</h3>
               <ul>
                   <li>picture: ${customer.picture}</li>
                   <li>email: ${customer.email}</li>
                   <li>phone: ${customer.phone}</li>
                   <li>gender: ${customer.gender}</li>
               </ul>
           </div>
           `;
        });

document.getElementById('output').innerHTML = output;

    })
};
