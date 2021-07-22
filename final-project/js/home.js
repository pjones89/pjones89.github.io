const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.5141&lon=112.0330&units=imperial&appid=ae108c558855c818874b0048edb42a8f"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById("current").textContent = "Currently: " + jsObject.current.weather[0].main;
        document.getElementById("temp").textContent = "Temp: " + jsObject.current.temp;
        document.getElementById("humidity").textContent = "Humidity: " + jsObject.current.humidity;

        var daysofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var list = jsObject.daily;
        var daynumber = 0;
        for (let x = 0; x < list.length; x++) {
                daynumber++;
                var currentdate = new Date();
                var numba = currentdate.getDay();
                numba -= 1;
                numba += daynumber;
                var name = daysofweek[numba];
                var temp = list[x].temp.day;
                const iconWebsite = "http://openweathermap.org/img/wn/" + list[x].weather[0].icon + ".png";

                document.getElementById("dayforecast" + daynumber).innerHTML = name;
                document.getElementById("forecastimg" + daynumber).setAttribute("src", iconWebsite);
                document.getElementById("forecasttemp" + daynumber).innerHTML = temp;
            
        }
    });