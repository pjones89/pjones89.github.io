function myMenu() {
    var x = document.getElementById("menulinks");
    if (x.style.display === "inline") {
        x.style.display = "none";
    } else{
        x.style.display = "inline";
    }
}

// the following code has been taken (and somewhat modified) from the codepen provided in week 4: "codepen.io/blazzard-jason/pen/gmGxaj"
var x = document.getElementById("menulinks");
window.onresize = () => {if (window.innerWidth >= 40em) {x.style.display = "inline";} else{x.style.display = "none"}}