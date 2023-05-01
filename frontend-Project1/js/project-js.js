// PILLS
var tabButtons = document.querySelectorAll(".tab-button");
var tabContents = document.querySelectorAll(".tab-content");

function showTab(tabIndex) {
  tabButtons.forEach(function(button) {
    button.classList.remove("active");
  });
  tabContents.forEach(function(content) {
    content.classList.add("hidden");
  });

  tabButtons[tabIndex].classList.add("active");
  tabContents[tabIndex].classList.remove("hidden");
}

showTab(0); // Show the first tab by default

tabButtons.forEach(function(button, index) {
  button.addEventListener("click", function() {
    showTab(index);
  });
});



// NAV header
// Get the current page URL
var url = window.location.pathname;

// Add the "active" class to the corresponding button in the header
if (url == "/index.html") {
  document.querySelector(".nav-home").classList.add("active");
} else if (url == "/events.html") {
  document.querySelector(".nav-events").classList.add("active");
} else if (url == "/exhibitions.html") {
  document.querySelector(".nav-exhibitions").classList.add("active");
} else if (url == "/contact.html") {
  document.querySelector(".nav-contact").classList.add("active");
}


// NAV FIXED WHEN SCROLL
// const header = document.querySelector('.site-header');
// const scrollTrigger = 250; 

// window.addEventListener('scroll', function() {
//   if (window.scrollY >= scrollTrigger) {
//     header.classList.add('fixed');
//   } else {
//     header.classList.remove('fixed');
//   }
// });



// BURGER MENU

// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('nav ul');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('show');
// });




// BURGER MENU ROUND2
const burgerMenu = document.querySelector('#burger-menu');
const hamburgerList = document.querySelector('.hamburger-list');

burgerMenu.addEventListener("click", () => {
  hamburgerList.classList.remove("hide");
  hamburgerList.classList.add("show");
});
