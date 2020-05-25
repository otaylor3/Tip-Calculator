

let bill = document.getElementById("bill");
let high = document.getElementById("high");
let mid = document.getElementById("mid");
let regular = document.getElementById("regular");
let low = document.getElementById("low");
let other = document.getElementById("other");
let custom = document.getElementById("custom");
let guest = document.getElementById("guest");
let test = document.getElementById("test");
let reset = document.getElementById("reset");

//curried value for values
const highvalue = (a) => (b) => a * b; 
const math1 = highvalue(35/100);
const math2 = highvalue(20/100);
const math3 = highvalue(10/100);
const math4 = highvalue(5/100);


//checking for what radio button is checked 
function test1() {
if(high.checked){
	   return(math1(bill.value));
}
else if(mid.checked){
	return(math2(bill.value));
}
else if(regular.checked){
	return(math3(bill.value));
}
else if(low.checked) {
	return(math4(bill.value));
}
else if(other.checked){
	return(bill.value * (custom.value/100) );
}
else{
	alert("Please select a tip percentage");
}
}


//calculating the tip amount
function finalcheck () {
   
   if (guest.value >= 1 ) {
	var h2 = document.createElement("h2");
	h2.appendChild(document.createTextNode("your tip is: $" + (test1()/guest.value).toFixed(2) ));
    document.body.appendChild(h2);
    console.log(h2);
    
       }
    else {
    	var h2 = document.createElement("h2");
	h2.appendChild(document.createTextNode("your tip is: $" + (test1()).toFixed(2) ));
    document.body.appendChild(h2);
    }
}






test.addEventListener("click", finalcheck);