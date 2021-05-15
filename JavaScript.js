
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// initailising varibels by getting them from html code
var myInput = document.getElementById("pass");
var letter = document.getElementById("letter");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var lengthpass = document.getElementById("lengthpass");


///showing the error box  
myInput.onfocus = function(){
    document.getElementById("messege").style.display = "block"
}


//remove the eeror box from the screen
myInput.onblur = function(){
    document.getElementById("messege").style.display = "none"
}


// typing into password feald
myInput.onkeyup = function(){
    var LowerCaseLett = /[a-z]/g; // matching letters lower case
    
    if(myInput.value.match(LowerCaseLett)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid"); 
    }
// Uppercase Letter
    var UpperCaseLett = /[A-Z]/g;// matching letters uppercase

    if(myInput.value.match(UpperCaseLett)){
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
    }

// Number 
     var Num = /[0-9]/g;// matching numbers 

     if(myInput.value.match(Num)){
         number.classList.remove("invalid");
         number.classList.add("valid");
     } else {
        number.classList.remove("valid");
         number.classList.add("invalid"); 
     }

// Pssword lenght
     if(myInput.value.length >= 8) { // matching lenght pass
        lengthpass.classList.remove("invalid");
        lengthpass.classList.add("valid");
    } else {
       lengthpass.classList.remove("valid");
        lengthpass.classList.add("invalid"); 
    }

}

document.getElementById("rundomCustomer").addEventListener('click', rundomCustomer);


function rundomCustomer(){
       fetch('https://randomuser.me/api/?results=5')// list of randon users
        .then ((res) => res.json())
        .then((data) => {
         let author = data.results; // storing data
         let output = '<h2> Customer</h2>'
        console.log(data);


        author.forEach(function(customer){ // going throug users (getting names,pic,age,email and phone)
            output += `
           <div
               <h3>Name:${customer.name.first}</h3> 
               <ul>
                   <img src="${customer.picture.large}">
                   <li>Age: ${customer.registered.age}</li>
                   <li>Gender: ${customer.gender}</li>
                   <li>Email: ${customer.email}</li>
                   <li>Phone: ${customer.phone}</li>
               </ul>
           </div>
           `;
        });

document.getElementById('output').innerHTML = output;// output users

    })
};


var total_items = 12;

         // var initialisation
        function calculateItemsValue() {
            var total = 0; // total num of the items
            var total_Starters = 0;// total num of the starters
            var total_Main = 0;// total num of the Main
            var total_Deserts = 0;// tital num of the Deserts
            var total_Drinks = 0;//total num of the Drinks
            var total_Veg = 0;// total num of the Vegeterian
            var total_NonVeg  = 0; // total num of the Non Vegeterian 

     
            document.querySelectorAll('[id^="q_"]').forEach(item => { // select all items from the list
                var item_price = parseInt(item.value)*parseInt(item.getAttribute("data-price")) // getting price of the item by attribute
                var item_cat = item.getAttribute("data-cat");// getting items by attribute ?
                
                if (!isNaN(item_price)) { // 
                    if (item_cat == 'Starters') {//getting the item by he name Starters
                        total_Starters += item_price;//showing price only for the Starters
                    }
                   if (item_cat == 'Main') {//getting the item by the name Main
                    total_Main += item_price;//showing price only for the Main
                    }  
                    if (item_cat == 'Deserts'){ //getting the item by the name Deserts
                        total_Deserts += item_price; //showing price only for the Deserts
                    }
                    if (item_cat == 'Drinks'){ //getting the item by the name Drinks
                        total_Drinks += item_price;//showing price only for the Drinks
                     }

            
                    var item_veg = item.getAttribute("data-veg"); // getting attribute by the data-veg

                    if (item_veg == 'true'){//getting the item data name - true
                        total_Veg += item_price;//showing price only for the Veg
                    }
                    if (item_veg == 'false'){//getting the item data name - false
                        total_NonVeg += item_price;//showing price only for the NonVeg
                    }
                    
                }  
                 
                total = total + item_price; // total sum of all items
                });
            
            document.getElementById('ItemsTotal').innerHTML = "$" + total; // dispaly items
            document.getElementById('ItemTotalStarters').innerHTML = "$" + total_Starters;//dispaly sum of the Sraters
            document.getElementById('ItemTotalMain').innerHTML = "$" + total_Main;//dispaly sum of the Main
            document.getElementById('ItemTotalDeserts').innerHTML = "$" + total_Deserts;//dispaly sum of the Deserts
            document.getElementById('ItemTotalDrinks').innerHTML = "$" + total_Drinks;//dispaly sum of the Drinks
            document.getElementById('ItemTotalVegeterian').innerHTML = "$" + total_Veg;//dispaly sum of the Veg
            document.getElementById('ItemTotalNonVeg').innerHTML = "$" + total_NonVeg;//dispaly sum of the NonVeg
        }

        document.querySelectorAll('[id^="q_"]').forEach(item => {
            item.addEventListener('keyup', calculateItemsValue); // showing that we are culc values in the box
        });

       
      
       
 
      
 
       
      







