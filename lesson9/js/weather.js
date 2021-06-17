  //taken from codepen.io/blazzard-jason/pen/oMRdJg (codepen that was included in the assignment for week 8)
  function changeRange(range) {
    document.getElementById("rangevalue").innerHTML = range;
}

function myMenu() {
    var x = document.getElementById("menulinks");
    if (x.style.display === "inline") {
        x.style.display = "none";
    } else{
        x.style.display = "inline";
    }
}

// the following code has been taken (and somewhat modified) from the codepen provided in week 4: "codepen.io/blazzard-jason/pen/gmGxaj"
window.onresize = () => {
    let x = document.getElementById("menulinks");
    if (window.innerWidth >= 40) {
        x.style.display = "inline";
    } else {
        x.style.display = "none"
    }
}


//taken from our lesson this week
//WebFont.load({
    //google: {
      //families: [
         //'Fjalla One'
      //]
    //}
  //});

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject["towns"];
        for (let i = 0; i < towns.length; i++ ) {
            let place = document.createElement("section");
            let h2 = document.createElement("h2");
            let h5 = document.createElement("h5");
            let p = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            let image = document.createElement("img");

            h2.textContent = towns[i].name;
            h5.textContent = towns[i].motto;
            p.textContent = "Year Founded: " + towns[i].yearFounded;
            p2.textContent = "Population: " + towns[i].currentPopulation;
            p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            image.setAttribute("src", towns[i].photo);
            image.setAttribute("alt", towns[i].name + " Image");

            place.appendChild(h2);
            place.appendChild(h5);
            place.appendChild(p);
            place.appendChild(p2);
            place.appendChild(p3);
            place.appendChild(image);

            if (towns[i].name == "Soda Springs") or (towns[i].name == "Fish Haven") ;or (towns[i].name == "Preston") ;{
                document.querySelector("div.places").appendChild(place);
            }
        }
    })