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

            if (towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" || towns[i].name == "Preston") {
                document.querySelector("div.places").appendChild(place);
            }
        }
    })