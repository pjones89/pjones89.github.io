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


//taken from our lesson this week
WebFont.load({
    google: {
      families: [
         'fontfamilynameofyourchoice'
      ]
    }
  });

  //taken from codepen.io/blazzard-jason/pen/oMRdJg (codepen that was included in the assignment for week 8)
  function changeRange(range) {
      document.getElementById("rangevalue").innerHTML = range;
  }