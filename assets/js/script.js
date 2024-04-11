'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category.toLowerCase()) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

var modal = document.getElementById("myModal");
var modalTitle = document.getElementById("modalTitle");
var modalDescription = document.getElementById("modalDescription");
var modalLink = document.getElementById("modalLink");
var modalImage = document.getElementById("modalImage");

// Get all project items
var projectItems = document.querySelectorAll('.project-item');

// Loop through all project items
projectItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    // Set modal content
    modalTitle.textContent = this.dataset.title;
    modalDescription.textContent = this.dataset.description;
    console.log(this.dataset.link);
    //log link type
    console.log(this.dataset.link.length);
    if (this.dataset.link.length == 0){
      modalLink.innerHTML = "Source code available upon request";
      //remove clickable
      modalLink.href = "#";
    } else {
      modalLink.innerHTML = "Project Link";
      modalLink.href = this.dataset.link;
    }
    modalImage.src = this.dataset.image;
    // Show the modal
    modal.classList.add("active");
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal-close-btn")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove("active");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("active");
  }
}

function sendEmail(form) {
  console.log("send email");
  var name = form.fullname.value;
  var email = form.email.value;
  var message = form.message.value;
  var subject = "Message from " + name;
  var body = "Name: " + name + "%0D%0A" + "Email: " + email + "%0D%0A" + "Message: " + message;
  window.open("mailto:fkalioras@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body), '_blank');
  return false;
}