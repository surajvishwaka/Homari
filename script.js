var index = 0;
var slidess = document.querySelectorAll(".slidess");
var dott = document.querySelectorAll(".dott");

function changeSlide() {

    if (index < 0) {
        index = slidess.length - 1;
    }

    if (index > slidess.length - 1) {
        index = 0;
    }

    for (let i = 0; i < slidess.length; i++) {
        slidess[i].style.display = "none";
        dott[i].classList.remove("active");
    }

    slidess[index].style.display = "block";
    dott[index].classList.add("active");

    index++;

    setTimeout(changeSlide, 2000);

}

changeSlide();