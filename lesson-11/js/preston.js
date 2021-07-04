const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=ae108c558855c818874b0048edb42a8f"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById("current").textContent = "Currently: " + jsObject.weather[0].main;
        document.getElementById("high").textContent = "High: " + jsObject.main.temp;
        document.getElementById("humidity").textContent = "Humidity: " + jsObject.main.humidity;
        document.getElementById("windspeed").textContent = "Wind Speed: " + jsObject.wind.speed;
    });

const newapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=ae108c558855c818874b0048edb42a8f"
fetch(newapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var daysofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var list = jsObject.list;
        var daynumber = 0
        for (let x = 0; x < list.length; x++) {
            var date = list[x].dt_txt;

            if (date.includes("18:00")) {
                daynumber++;
                var currentdate = new Date(date);
                var name = daysofweek[currentdate.getDay()];
                var temp = list[x].main.temp;
                const iconWebsite = "http://openweathermap.org/img/wn/" + list[x].weather[0].icon + ".png";

                document.getElementById("dayforecast" + daynumber).innerHTML = name;
                document.getElementById("forecastimg" + daynumber).setAttribute("src", iconWebsite);
                document.getElementById("forecasttemp" + daynumber).innerHTML = temp;
            }
        }

        });

        

        const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
        fetch(requestURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonObject) {
                const towns = jsonObject["towns"];
                    const events = document.createElement("section");
                    let h1 = document.createElement("h1");
                    h1.textContent = "Upcoming Events!";
                    events.appendChild(h1);
                    for (let i = 0; i < towns.length; i++ ) {
                        if (towns[i].name == "Preston") {
                            for (let x = 0; x < towns[i].events.length; x++) {
                                let h5 = document.createElement("h5");
                                h5.textContent = item;
                                events.appendChild(h5);
                            }
                }
                document.querySelector("div.events").appendChild(events);
            }
            })
