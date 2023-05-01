// PILLS
// var tabButtons = document.querySelectorAll(".tab-button");
// var tabContents = document.querySelectorAll(".tab-content");

// function showTab(tabIndex) {
//   tabButtons.forEach(function(button) {
//     button.classList.remove("active");
//   });
//   tabContents.forEach(function(content) {
//     content.classList.add("hidden");
//   });

//   tabButtons[tabIndex].classList.add("active");
//   tabContents[tabIndex].classList.remove("hidden");
// }

// showTab(0); // Show the first tab by default

// tabButtons.forEach(function(button, index) {
//   button.addEventListener("click", function() {
//     showTab(index);
//   });
// });




// SELECTION PILLS-EVENT LIST
const dropdownSelect = document.getElementById("dropdown-select");
const dropdownContent = document.getElementById("dropdown-content");
const dropdownPanels = document.getElementsByClassName("dropdown-panel");

// Hide all the dropdown panels except for the first one
for (let i = 1; i < dropdownPanels.length; i++) {
  dropdownPanels[i].style.display = "none";
}

dropdownSelect.addEventListener("change", (event) => {
  // Get the value of the selected option
  const selectedOption = event.target.value;

  // Hide all the dropdown panels
  for (let i = 0; i < dropdownPanels.length; i++) {
    dropdownPanels[i].style.display = "none";
  }

  // Show the dropdown panel for the selected option
  const selectedPanel = document.getElementById(selectedOption + "-content");
  selectedPanel.style.display = "flex";
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




