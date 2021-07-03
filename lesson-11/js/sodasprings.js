const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=ae108c558855c818874b0048edb42a8f"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById("current").textContent = "Currently: " + jsObject.weather[0].main;
        document.getElementById("high").textContent = "High: " + jsObject.main.temp;
        document.getElementById("humidity").textContent = "Humidity: " + jsObject.main.humidity;
        document.getElementById("windspeed").textContent = "Wind Speed: " + jsObject.wind.speed;
    });

const newapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=ae108c558855c818874b0048edb42a8f"
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