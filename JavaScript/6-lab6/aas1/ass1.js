/**open small window and write a sentance letter by letter */
var arr='welcome to js';
var reff = open("test.html", "test", "width=300,height=300")
open // == window.opener  null
var i=0 ;
if(i<arr.length ){
    setInterval(function () {
    reff.document.write(arr[i]);
    i++;
    if (i === arr.length-1) {
        reff.close();}
    
}, 1000)


}





