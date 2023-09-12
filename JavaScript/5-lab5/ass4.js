/*4- Write JavaScript function that returns random array of numbers between 1:10 
Array length is 8 and no repeated random data appears on array*/
function rondomnum(){
console.log(`get random number`)
var arr = [];
    
    if (arr.length < 8) {
      var randomNumber = Math.floor(Math.random() * 10) + 1;
      
      if (arr.indexOf(randomNumber) === -1) {
        arr.push(randomNumber);
      }
    }
    
    console.log(arr);  }
  
    rondomnum();
 