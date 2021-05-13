
// initailising varibels by getting them from html code
var myInput = document.getElementById("pass");
var letter = document.getElementById("letter");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var lengthpass = document.getElementById("lengthpass");


///showing the error box  
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
     if(myInput.value.length >= 8) {
        lengthpass.classList.remove("invalid");
        lengthpass.classList.add("valid");
    } else {
       lengthpass.classList.remove("valid");
        lengthpass.classList.add("invalid"); 
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

document.getElementById('output').innerHTML = output;

    })
};


var total_items = 12;


        function calculateItemsValue() {
            var total = 0;
            var total_Starters = 0;
            var total_Main = 0;
            var total_Deserts = 0;
            var total_Drinks = 0;
            var total_Veg = 0;
            var total_NonVeg  = 0;

           /*for (let i = 1; i <= total_items; i++) {
              itemID =document.getElementById("q_" + i);
             // itemID =document.querySelectorAll("#q_1, #q_2, #q_3" + i);
               total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
                
            }*/
            document.querySelectorAll('[id^="q_"]').forEach(item => {
                var item_price = parseInt(item.value)*parseInt(item.getAttribute("data-price"))
                var item_cat = item.getAttribute("data-cat");
                
                if (!isNaN(item_price)) {
                    if (item_cat == 'Starters') {
                        total_Starters += item_price;
                    }
                   if (item_cat == 'Main') {
                    total_Main += item_price;
                    }  
                    if (item_cat == 'Deserts'){
                        total_Deserts += item_price;
                    }
                    if (item_cat == 'Drinks'){
                        total_Drinks += item_price;
                     }

            
                    var item_veg = item.getAttribute("data-veg");

                    if (item_veg == 'true'){
                        total_Veg += item_price;
                    }
                    if (item_veg == 'false'){
                        total_NonVeg += item_price;
                    }
                    
                    }
                 
                total = total + item_price;
                });

            document.getElementById('ItemsTotal').innerHTML = "$" + total;
            document.getElementById('ItemTotalStarters').innerHTML = "$" + total_Starters;
            document.getElementById('ItemTotalMain').innerHTML = "$" + total_Main;
            document.getElementById('ItemTotalDeserts').innerHTML = "$" + total_Deserts;
            document.getElementById('ItemTotalDrinks').innerHTML = "$" + total_Drinks;
            document.getElementById('ItemTotalVegeterian').innerHTML = "$" + total_Veg;
            document.getElementById('ItemTotalNonVeg').innerHTML = "$" + total_NonVeg;
        }

        document.querySelectorAll('[id^="q_"]').forEach(item => {
            item.addEventListener('keyup', calculateItemsValue);
        });

      




       
      
function CalculateStartersValue(){

    var total_s = 0;
    for (let n = 1; n <= total_starters; n++) {
        startersId = document.querySelectorAll("#q_1,#q_2,#q_2," + n);
        total_s = total_s + parselInt(startersId.value) * parselInt(startersId.getAttribute("data-price"));
    }
    document.getElementById('ItemsTotalStarters').innerHTML = "$" + total_s;

    document.querySelectorAll('[id^="q_1"]').forEach(item_s => {
        item_s.addEventListener('keyup', CalculateStartersValue);
    });
}


const carouselSlide = document.querySelectorAll('.carousel-slide');
const coriuselImages = document.querySelectorAll('.carousel-slides');

// Buttons. Getting and saving buttons id into const
const prevBtn = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextButton');

//Counter 
let counter =1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX (' + (-size*counter) + 'px)';


//Button listeners
nextBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX (' + (-size*counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX (' + (-size*counter) + 'px)';
});


