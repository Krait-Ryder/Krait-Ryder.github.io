let clickerIncrease =1;
let multiplier =1;
let totalClicks;
let treePrice =10;
let hatPrice = 100;
function clickCounter(buttonPressed) {
    
    
if (buttonPressed == 1){   // if the increase button is pressed it will increase the number by the increase and the multiplier
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+clickerIncrease*multiplier;
        totalClicks = Number(localStorage.clickcount);
      } 
      else {
        localStorage.clickcount = 1;
      }
    }
}

 else if (buttonPressed == 2){ // if the clear button is pressed it will set the count to 0
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
          localStorage.clickcount = 0;
        } else {
          localStorage.clickcount = 1;
        }
      }
 } 
 else if (buttonPressed == 3){
    if (localStorage.clickcount >= treePrice){
        localStorage.clickcount = totalClicks - treePrice;
        multiplier++;
        treePrice*=2;
    }
}
   
 else if (buttonPressed == 4){
    if (localStorage.clickcount >= hatPrice ){
        localStorage.clickcount = totalClicks - hatPrice;
        multiplier +=3;
        hatPrice *=2;
    }
   
 }

 else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
 
    document.getElementById("result").innerHTML = "You have &euro;" + localStorage.clickcount + "<br>" +  " The price of a tree is &euro;" + treePrice+ "<br>" +  " The Price of a Hat is &euro;" + hatPrice + "<br>";
  }

 