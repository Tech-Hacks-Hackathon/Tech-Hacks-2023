var menu = document.getElementById("menu");
var box = document.querySelector(".box");
var subbox = document.querySelector(".subbox");
var cancel = document.getElementById("cancel");


menu.addEventListener("click", function () {
    box.style.display = "block";
    box.style.transition = "all 1s ease-in-out";
    box.style.transform = "translatey(-20%)";
    box.style.position = "fixed";
    box.style.width = "100%";
    box.style.zIndex = "1";
});

cancel.addEventListener("click", function () {
    box.style.display = "none";
    box.style.transition = "all 1s ease-in-out";
});





