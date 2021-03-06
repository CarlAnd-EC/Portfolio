window.onload = function() {
  const detailedSections = document.getElementsByClassName('summary-main-section');
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
}

//DOM unique elements
const main = document.getElementById("main");
const logoBtn = document.getElementById("logo");
const homeBtn = document.getElementById("homeBtn");
const dropBtn = document.getElementById("dropBtn");
const topping = document.getElementById("topping");
const sideNavbar = document.getElementById("sideNavbar");
const showMenu = document.getElementById("show");
const hideMenu = document.getElementById("hide");
const lp = document.getElementById("LP");
const recordInfo = document.getElementsByClassName("record-info")[0];
const audio = document.getElementById("audio");
const showForm = document.getElementById("showForm");
const contFormSec = document.getElementById("contactFormSection");
const contactForm = document.getElementById("contactForm");
const submitMsg = document.getElementById("submitMsg");

function assignZIndex(name){
  const description = document.getElementsByName(name);
  for (let i = 0; i < description.length; i++) {
    description[i].style.zIndex = `${i}`;
  }
}
function speedUpRotation(){
  const logoSection = document.getElementsByClassName("logo-section");
  logoSection[0].style.animation = "400ms rotate linear infinite";
  setTimeout(() => {
    logoSection[0].style.animation = "4s rotate linear infinite";
  }, 500);
}
function clickGlow(){
  homeBtn.classList.toggle("active");
  setTimeout(() => {
    homeBtn.classList.toggle("active");
  }, 200);
}
function highlightSelectedBtn(event,className){
  const button = document.getElementsByClassName(className);
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove("active");
  }
  event.currentTarget.classList.add("active");
}
function resetSelection(className){
  const button = document.getElementsByClassName(className);
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove("active");
  }
}
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
function drop() {
  document.getElementById("dropBtn").classList.toggle("active");
  document.getElementById("dropdownContent").classList.toggle("active");
}
function describe(event, topic){
  if(event.currentTarget.classList.contains("active")){
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(topic).classList.toggle("active");
    event.currentTarget.classList.toggle("active");
  }
  else{
    const tab = document.getElementsByClassName("tablink");
    const content = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tab.length; i++) {
      tab[i].classList.remove("active");
      content[i].classList.remove("active");
    }
    document.getElementById(topic).classList.add("active");
    event.currentTarget.classList.add("active");
  }
}
function describeMobile(event){
  event.currentTarget.classList.toggle("active");
  if(event.currentTarget.classList.contains("active")){
    event.currentTarget.firstElementChild.classList.replace("fa-chevron-circle-down","fa-chevron-circle-up");
    return;
  }
  event.currentTarget.firstElementChild.classList.replace("fa-chevron-circle-up","fa-chevron-circle-down");
}
function showContactForm(){
  showForm.classList.toggle("click");
  setTimeout(() => {
    showForm.classList.toggle("click");
    contFormSec.classList.toggle("active");
    contactForm.classList.toggle("active");
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

// Z-indexes for tabs content:
assignZIndex("interests");
assignZIndex("hobbies");
// Onclick events:
logoBtn.onclick = () => {
  resetSelection('section-link');
  speedUpRotation();
};
homeBtn.onclick = () => {
  resetSelection('navbar-button');
  clickGlow();
};
dropBtn.onclick = () => drop();
hideMenu.onclick = () => closeNav();
showMenu.onclick = () => openNav();
showForm.onclick = () => showContactForm();
submitMsg.onclick = () => submitMsgEffect();

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
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function delay (URL,delay) {
  setTimeout( function() { window.location = URL }, delay);
}

audio.onplay = ()=> playRecord();
audio.onpause = ()=> playRecord();
// audio.addEventListener("play", ()=>{playfunc()});

function playRecord(){
  lp.classList.toggle("playing");
  recordInfo.classList.toggle("active");
}