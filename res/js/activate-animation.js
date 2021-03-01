let menu = document.querySelectorAll(".nav .menu-group > a");

window.onload = activeNav;

window.onscroll = function() {
    activateAnimation();
    activeNav();
}

// ACTIVATE ANIMATION
function activateAnimation(){
    
    let hFeatured = document.querySelector(".featured").offsetTop;
    let hAbout = document.querySelector(".about").offsetTop;
    let hTeam = document.querySelector(".team").offsetTop;
    let hConnect = document.querySelector(".connect").offsetTop;
    let hStories = document.querySelector(".stories").offsetTop;
    let hContact = document.querySelector(".contact").offsetTop;
    
    const x = 300;
    
    // FEATURED
    if (window.pageYOffset >= hFeatured - x) {
        document.querySelector(".featured").classList.add("activate");
    }
    
    // ABOUT
    if (window.pageYOffset >= hAbout - x) {
        document.querySelector(".about").classList.add("activate");
    }
    
    // TEAM
    if (window.pageYOffset >= hTeam - x) {
        document.querySelector(".team").classList.add("activate");
    }
    
    // CONNECT
    if (window.pageYOffset >= hConnect - x) {
        document.querySelector(".connect").classList.add("activate");
    }
    
    // STORIES
    if (window.pageYOffset >= hStories - x) {
        document.querySelector(".stories").classList.add("activate");
    }
    
    // CONTACT
    if (window.pageYOffset >= hContact - x) {
        document.querySelector(".contact").classList.add("activate");
    }
}

// ACTIVE NAV
function activeNav() {
    
    let hFeatured = document.querySelector(".featured").offsetTop;
    let hAbout = document.querySelector(".about").offsetTop;
    let hTeam = document.querySelector(".team").offsetTop;
    let hNews = document.querySelector(".news").offsetTop;
    let hContact = document.querySelector(".contact").offsetTop;
    
    // HOME
    if (window.pageYOffset < hFeatured) {
        removeActive();
        menu[0].classList.add("active");
    }
    
    // FEATURED
    if (window.pageYOffset >= hFeatured && window.pageYOffset < hAbout) {
        removeActive();
        menu[1].classList.add("active");
    }
    
    // ABOUT
    if (window.pageYOffset >= hAbout && window.pageYOffset < hTeam) {
        removeActive();
        menu[2].classList.add("active");
    }
    
    // TEAM
    if (window.pageYOffset >= hTeam && window.pageYOffset < hNews) {
        removeActive();
        menu[3].classList.add("active");
    }
    
    // NEWS
    if (window.pageYOffset >= hNews && window.pageYOffset < hContact) {
        removeActive();
        menu[4].classList.add("active");
    }
    
    // Contact
    if (window.pageYOffset >= hContact) {
        removeActive();
        menu[5].classList.add("active");
    }
}

// REMOVE ACTIVE
function removeActive() {
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove("active");
    }
}