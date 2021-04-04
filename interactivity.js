function openNav() {
    // document.getElementById("sideNavbar").style.width = "100px";
    document.getElementById("sideNavbar").style.height = "100%";
    document.getElementById("main").style.marginLeft = "100px";
    document.getElementById("references").style.marginLeft= "100px";
}
  
function closeNav() {
    // document.getElementById("sideNavbar").style.width = "0";
    document.getElementById("sideNavbar").style.height = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("references").style.marginLeft= "0";
}

document.getElementById("hide").onclick= () => closeNav();
document.getElementById("logo").onclick= () => openNav();

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