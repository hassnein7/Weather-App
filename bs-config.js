module.exports = {
    server: {
        baseDir: "./"
    },
    files: ["css/*.css", "*.html", "js/*.js"]
};


async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    updateWeatherIcon(data.weather[0].main);
    updateCityImage(city);
}

function updateWeatherIcon(weatherMain) {
    switch(weatherMain) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        default:
            weatherIcon.src = "images/default.png";
    }
}

function updateCityImage(city) {
    cityImage.src = `images/${city.toLowerCase()}.png`;
    cityImage.onerror = function() {
        this.src = 'images/default-city.png';
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// تحميل بيانات مدينة افتراضية عند بدء التطبيق
checkWeather("دبي");

module.exports = {
    server: {
        baseDir: "./"
    },
    files: ["css/*.css", "*.html", "js/*.js"]
};
