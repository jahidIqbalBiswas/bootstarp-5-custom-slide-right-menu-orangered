var sliderDiv = document.querySelectorAll(".sliderComponenets");
setInterval(function() {
    if (sliderDiv[0].classList.contains("active")) {
        sliderDiv[0].classList.remove("active");
        sliderDiv[1].classList.add("active");
    } else if (sliderDiv[1].classList.contains("active")) {
        sliderDiv[1].classList.remove("active");
        sliderDiv[2].classList.add("active");
    } else if (sliderDiv[2].classList.contains("active")) {
        sliderDiv[2].classList.remove("active");
        sliderDiv[3].classList.add("active");
    } else {
        sliderDiv[3].classList.remove("active");
        sliderDiv[0].classList.add("active")
    }
}, 4000)