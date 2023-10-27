
var c = 0;
timerid = setInterval(function () {
        c++;
        document.title = c;
        var elem= document.createElement('table');
        elem.textContent = c;
        elem.style.border = "6px double red";
        document.body.appendChild(elem);
        

}, 1000)

