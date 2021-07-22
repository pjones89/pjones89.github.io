fetch("directory.json")
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var i = 0
        while (i < 7) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            let p2 = document.createElement("p");
            let image = document.createElement("img");

            h2.textContent = jsObject.businesses[i].name;
            p.textContent = "Phone Number: " + jsObject.businesses[i].phone;
            p2.textContent = "Website: " + jsObject.businesses[i].website;
            image.setAttribute("src", "images/" + jsObject.businesses[i].logo);
            image.setAttribute("alt", "logo");

            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(p2);
            card.appendChild(image);

            document.querySelector("div.cards").appendChild(card);
            i++;
        }
    })


    