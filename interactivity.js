function openNav() {
    // document.getElementById("sideNavbar").style.width = "100px";
    document.getElementById("sideNavbar").style.height = "140%";
    document.getElementById("topping").style.transitionDuration = "0s";
    document.getElementById("topping").style.borderBottomLeftRadius = "0px";
    document.getElementById("topping").style.borderBottomRightRadius = "0px";
    document.getElementById("show").style.visibility = "hidden";
    document.getElementById("main").style.transitionDelay = "0s";
    document.getElementById("references").style.transitionDelay = "0s";
    document.getElementById("main").style.marginLeft = "140px";
    document.getElementById("references").style.marginLeft= "140px";
}
  
function closeNav() {
    // document.getElementById("sideNavbar").style.width = "0";
    document.getElementById("sideNavbar").style.height = "0";
    document.getElementById("topping").style.transitionDuration = "2s";
    document.getElementById("topping").style.borderBottomLeftRadius = "20px";
    document.getElementById("topping").style.borderBottomRightRadius = "20px";
    document.getElementById("show").style.visibility = "visible";
    document.getElementById("show").style.visibility = "visible";
    document.getElementById("main").style.transitionDelay = "0.75s";
    document.getElementById("references").style.transitionDelay = "0.75s";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("references").style.marginLeft = "0";
}

document.getElementById("hide").onclick= () => closeNav();
document.getElementById("show").onclick= () => openNav();

// function(){
//     document.getElementById("sideNavbar").style.display="none";
//     document.getElementById("main").style.marginLeft= "0";
//     document.getElementById("references").style.marginLeft= "0";
// }

// function(){
//     document.getElementById("sideNavbar").style.display="block";
//     document.getElementById("main").style.marginLeft= "100px";
//     document.getElementById("references").style.marginLeft= "100px";
// }