window.onload = function() {
  console.log("Page loaded...");
  var detailedSections = document.getElementsByTagName('summary');
  for(let i = 0; i < detailedSections.length; i++) {
    const hr = `hr${i+1}`;
    const arrow = `arrow${i+1}`;
    document.getElementById(hr).classList.add("expand-hr");
    document.getElementById(arrow).classList.add("downwards");
    detailedSections[i].onclick = function() {
      document.getElementById(hr).classList.toggle("expand-hr");
      document.getElementById(arrow).classList.toggle("downwards");
    }
  }
  // Get all elements with class="tabcontent" and hide them
  description = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < description.length; i++) {
    description[i].style.zIndex = `${i}`;
  }
}
const main = document.getElementById("main");
const sideNavbar = document.getElementById("sideNavbar");
const topping = document.getElementById("topping");
const showMenu = document.getElementById("show");
const hideMenu = document.getElementById("hide");
const showForm = document.getElementById("showForm");
const contFormSec = document.getElementById("contactFormSection");
const contactForm = document.getElementById("contactForm");
const submitMsg = document.getElementById("submitMsg");
const dropBtn = document.getElementById("dropBtn");

function openNav() {
  // sideNavbar.style.width = "100px";
  sideNavbar.style.height = "70vh";
  topping.style.transitionDuration = "0s";
  topping.style.borderBottomLeftRadius = "0px";
  topping.style.borderBottomRightRadius = "0px";
  showMenu.style.visibility = "hidden";
  hideMenu.style.visibility = "visible";
}

function closeNav() {
  // sideNavbar.style.width = "0";
  sideNavbar.style.height = "0";
  topping.style.transitionDuration = "1.5s";
  topping.style.borderRadius = "25px";
  showMenu.style.visibility = "visible";
  hideMenu.style.visibility = "hidden";
}

function showContactForm(){
  showForm.style.boxShadow = "none";
  showForm.classList.toggle("click");
  setTimeout(() => {
    showForm.style.boxShadow="8px 8px 5px black";
  }, 200);
  setTimeout(() => {
    showForm.classList.toggle("click");
    contFormSec.style.display = "block";
    contactForm.style.visibility = "visible";
  }, 1100);
}

function submitMsgEffect(){
  submitMsg.style.boxShadow = "none";
  submitMsg.classList.toggle("click");
  setTimeout(() => {
    submitMsg.style.boxShadow="8px 8px 5px black";
  }, 200);
  setTimeout(() => {
    showForm.classList.toggle("click");
  }, 1100);
}
function drop() {
  document.getElementById("dropdownContent").classList.toggle("active");
  // console.log("Botón Drop fue presionado");
}
hideMenu.onclick = () => closeNav();
showMenu.onclick = () => openNav();
showForm.onclick = () => showContactForm();
submitMsg.onclick = () => submitMsgEffect();
dropBtn.onclick = () => drop();
/*Vertical Tab Gallery (Interests section)*/
function describe(event, topic) {
  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(topic).classList.toggle("active");
  event.currentTarget.classList.toggle("active");
}

/*Slideshow (Projects section) */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function delay (URL,delay) {
  setTimeout( function() { window.location = URL }, delay);
}