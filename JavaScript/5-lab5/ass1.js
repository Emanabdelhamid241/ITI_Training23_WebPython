var arr=[3,1,2,4,3,75,100];

/************************ Write a JavaScript code to remove duplicate items from an array.************/
function removeDuplicates(arr) {
    console.log(`remove dublecatied numbers`)
return arr.filter((item,
    index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr))


/************** Sort them ascending ************** */
function sorted(arr){
// console.log(arr.sort)
console.log("Sort Ascending")

arr.sort(function (a, b) {
    return a - b

})
console.log(arr);
}
sorted(arr);
/**************Filter numbers larger than 50
                 a- User defined function
                 b- Array built in filter function************************ */
                 function filteration(arr){
                    console.log("firter larg than 50 ")
                    var newarr=[];
                    for(var i=0;i<=arr.length;i++){
                        if(arr[i]>50){
                            newarr.push(arr[i])
                        }
                    }
                    console.log(newarr)
                 console.log("firter larg than 50 using filterfun")

let getlargnumbers=arr.filter(function (el){
                 return (el>50); 
                });
                console.log(getlargnumbers)
            }
            filteration(arr);
/*******************Display Max and Min Numbers
                 a- User defined function
                 b- Math functions using es6 feature*******************************************/
function findmax_min_numbers(arr){
var min=arr[0];
var max=arr[0];
console.log(`maxium and minmium`)
for(var i=0;i<=arr.length;i++){
if(arr[i]<=min){
    min=arr[i]
}
else if(arr[i]>=max){
    max=arr[i]
}
}
console.log(`maxmium number ${max}`);
console.log(`minmium number ${min}`);

/******** */
console.log(`using math function`);

var max2=Math.max(...arr);
console.log(`maxmium number ${max2}`);
var min2=Math.min(...arr);
console.log(`maxmium number ${min2}`);
}
findmax_min_numbers(arr);
