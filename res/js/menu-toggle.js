const menuToggle = document.querySelector(".menu-toggle");
const body = document.querySelector("body");

menuToggle.onclick = function() {
    if (window.innerWidth < 768) {
        body.classList.toggle("open");
     }
}

window.onresize = function() {
    if (window.innerWidth >= 768) {
        body.classList.remove("open");
    }
}