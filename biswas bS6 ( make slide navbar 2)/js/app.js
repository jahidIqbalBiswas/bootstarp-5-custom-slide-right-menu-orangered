/* --------------selectors---------------------- */
var myToggle = document.querySelector(".myToggle");
var slideNav = document.querySelector(".slideNav");
var overlay = document.querySelector(".overlay");
var overlayIn = document.querySelector(".overlayIn");
var none = document.querySelectorAll(".d-none")
var myLength = none.length;
/* -----------------function----------------------------- */
function toggleFunc() {
    slideNav.classList.toggle("showNav");
    myToggle.classList.toggle("change");
    overlay.classList.toggle("overlayIn");
    for (var i = 0; i < myLength; i++) {
        none[i].classList.toggle("d-none");
    };
};

function removeFunction() {
    slideNav.classList.remove("showNav");
    myToggle.classList.remove("change");
    overlay.classList.remove("overlayIn");
    for (var i = 0; i < myLength; i++) {
        none[i].classList.add("d-none");
    };
};
/* --------------------addEventListener--------------------------- */
myToggle.addEventListener("click", toggleFunc);
overlay.addEventListener("click", removeFunction);