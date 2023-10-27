addEventListener('load', function () {
    img = document.getElementsByTagName("img")[0];
    prev = document.getElementById("prev")
    next = document.getElementById("next")
    counter = 1;
    next.addEventListener('click', function () {
        counter++
        if (counter == 8)
            counter=1
        img.src = "images/" + counter + ".jpeg";

    })// next

    prev.addEventListener('click', function () {
        counter--
        if (counter == 0)
            counter = 7
        img.src = "images/" + counter + ".jepg";

    })// next
})