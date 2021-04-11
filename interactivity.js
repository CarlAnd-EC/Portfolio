window.onload = function() {
    console.log("Page loaded...");
    var detailedSections = document.getElementsByTagName('details');
    var horizontalRules = document.getElementsByTagName('hr');
    for(let i = 0; i < detailedSections.length; i++) {
        const hr = `hr${i+1}`;
        detailedSections[i].onclick = function() {
            document.getElementById(hr).classList.toggle("expand-hr");
        }
    }
}
const main = document.getElementById("main");
const sideNavbar = document.getElementById("sideNavbar");
const topping = document.getElementById("topping");
const show = document.getElementById("show");
const hide = document.getElementById("hide");
const references = document.getElementById("references");

function openNav() {
    // sideNavbar.style.width = "100px";
    sideNavbar.style.height = "140%";
    topping.style.transitionDuration = "0s";
    topping.style.borderBottomLeftRadius = "0px";
    topping.style.borderBottomRightRadius = "0px";
    show.style.visibility = "hidden";
    main.style.transitionDelay = "0s";
    references.style.transitionDelay = "0s";
    main.style.marginLeft = "140px";
    references.style.marginLeft= "140px";
}
  
function closeNav() {
    // sideNavbar.style.width = "0";
    sideNavbar.style.height = "0";
    topping.style.transitionDuration = "2s";
    topping.style.borderBottomLeftRadius = "20px";
    topping.style.borderBottomRightRadius = "20px";
    show.style.visibility = "visible";
    show.style.visibility = "visible";
    main.style.transitionDelay = "0.75s";
    references.style.transitionDelay = "0.75s";
    main.style.marginLeft = "0";
    references.style.marginLeft = "0";
}

hide.onclick= () => closeNav();
show.onclick= () => openNav();