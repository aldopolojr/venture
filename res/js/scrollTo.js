// DECLARATION
const home = document.querySelector(".banner");
const featured = document.querySelector(".featured");
const about = document.querySelector(".about");
const team = document.querySelector(".team");
const news = document.querySelector(".news");
const contact = document.querySelector(".contact");

const menuName = [home, featured, about, team, news, contact];
const menuButtons = document.querySelectorAll(".nav .menu-group > a");


// EVENTS
for (let i = 0; i < menuName.length; i++) {
    menuButtons[i].onclick = function() {
        prevent();
        scrollTo(menuName[i]);
    }
}

// FUNCTIONS
function scrollTo(element){
     window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop
    });
}

function prevent(e) {
    event.preventDefault();
}

//document.querySelectorAll('a[href^="#"]').onclick = function(event) {
//  event.preventDefault();
//});