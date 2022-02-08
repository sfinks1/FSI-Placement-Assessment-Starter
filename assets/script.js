// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Samantha Finks" //created by credit

// We'll use these variables to track the counts of each cookie type. let limited scope
let gb = 0      //Gingerbread
let cc = 0      //Chocolate Chip
let ss = 0      //Sugar Sprinkle
//variables dealing with total quantity 
var gbQuantity; //gingerbread total quant
var ccQuantity; //chocolate chip total quant
var ssQuantity; //sugar sprinkle total quant
var total = 0;  //total count
var totalQuantity = document.getElementById("quantity-total"); //all cookies total quantity method
var gbQuantity = document.getElementById("qty-gb");//quantity for gingerbread method
var ccQuantity = document.getElementById("qty-cc");//method calculating cc 
var ssQuantity = document.getElementById("qty-sugar");//method calculating ss count


//code updating name display

document.getElementById("credit").textContent = `Created by ${yourName}` 

// Event listener, action of clicks on the "+" button for Gingerbread cookies.

//note no code present that accounts for conditions such as extraneous neg clicks 
//when total count for each cookie is at 0
document.getElementById("add-gb").addEventListener('click', function() {
    
    {
             gb++
       
    }
   
    gbQuantity.textContent = gb;
    
    total = total + 1;
    totalQuantity.textContent = total;
    console.log("Gingerbread + was clicked!")
})
// Event listener to decrease quantity on the "-" button for Gingerbread cookies.

document.getElementById("minus-gb").addEventListener("click", function() {
if(gb > 0)
    {
        gb-- 
    }
    
    gbQuantity.textContent = gb;

    if(cc===0 && ss === 0 && gb === 0)//if total is in the neg and gb is 0 then correct total to 0
    {
        total = 0;
    }
    if(gb != 0){
        total = total - 1;
    }
    
    totalQuantity.textContent = total;
    
    console.log("Gingerbread - was clicked!")
})


// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById("add-cc").addEventListener("click", function() {
    
    {
        cc++
    }
    
    ccQuantity.textContent = cc;
    
    total = total + 1;
    totalQuantity.textContent = total;
    
    console.log("Chocolate Chip + was clicked!")
})
// Event listener to decrease quantity on the "-" button for Chocolate Chip cookies.

document.getElementById("minus-cc").addEventListener("click", function() 
{
    if(cc > 0)
    {
        cc--
    }
    if(cc===0 && ss === 0 && gb === 0)//if total is in the neg and cc is 0 then correct total to 0
    {
        total = 0;
    }
    if(cc != 0){
         total = total - 1;
    }
    ccQuantity.textContent = cc;
    totalQuantity.textContent = total;  
    console.log("Chocolate Chip - was clicked!")
})
// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById("add-sugar").addEventListener("click", function() {
    
    {
        ss++
    }
    
    ssQuantity.textContent = ss;
    totalQuantity = document.getElementById("qty-total");
    total = total + 1;
    totalQuantity.textContent = total;
    console.log("Sugar Sprinkle + was clicked!")
})
// Event listener to decrease quantity on the "-" button for Sugar Sprinkle cookies.
document.getElementById("minus-sugar").addEventListener("click", function() {
    if ( ss > 0)
    {
        ss--
    }    
    if(cc===0 && ss === 0 && gb === 0)//if total is in the neg and ss is 0 then correct total to 0
    {
        total = 0;
    }
    if(ss != 0){
         total = total - 1;
    }
    ssQuantity.textContent = ss;
    totalQuantity.textContent = total;
    console.log("Sugar Sprinkle - was clicked!")
})