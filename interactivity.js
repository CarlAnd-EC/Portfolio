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
const show = document.getElementById("show");
const hide = document.getElementById("hide");

function openNav() {
  // sideNavbar.style.width = "100px";
  sideNavbar.style.height = "70vh";
  topping.style.transitionDuration = "0s";
  topping.style.borderBottomLeftRadius = "0px";
  topping.style.borderBottomRightRadius = "0px";
  show.style.visibility = "hidden";
  hide.style.visibility = "visible";
}

function closeNav() {
  // sideNavbar.style.width = "0";
  sideNavbar.style.height = "0";
  topping.style.transitionDuration = "1.5s";
  topping.style.borderRadius = "25px";
  show.style.visibility = "visible";
  hide.style.visibility = "hidden";
}

hide.onclick= () => closeNav();
show.onclick= () => openNav();

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