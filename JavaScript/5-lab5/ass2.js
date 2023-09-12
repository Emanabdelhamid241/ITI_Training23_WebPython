/* function to Compute the sum and product of an array of integers */
/*using eval*/
function sumAll(numbersArray){
    var sum = eval(numbersArray.join("+"))
    console.log(`sum=${sum}`)
    var product = eval(numbersArray.join("*"))
    console.log(`product=${product}`)

}
sumAll([2,4,5]);

console.log("===========================");

/******************************************************************** */
/*using eval and argument*/
console.log(`using Eval & arguments`)


function SUMALL() {
    sum = eval([...arguments].join('+'));
    product = eval([...arguments].join('*'));
  
    console.log(`sum = ${sum}`);
    console.log(`product = ${product}`);
  }

  SUMALL();

