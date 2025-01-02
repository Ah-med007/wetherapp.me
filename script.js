const apiKeys = "4f174483143b485b6f28da454e08de7d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const showResult = document.querySelector(".weather");
const error = document.querySelector(".error");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKeys}`);

    if (response.status == 404  ) {
        error.style.display = "block";
        showResult.style.display = "none";
    } else {
        var data = await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Cloud") {
            weatherIcon.src = "weather-app-img/images/clouds.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "weather-app-img/images/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "weather-app-img/images/drizzle.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "weather-app-img/images/clear.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "weather-app-img/images/mist.png"
        }
        showResult.style.display = "block";
        error.style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})


const jokeObject ={
    id: "0000002222",
    joke: "hahahahahhaha"
}
const postData = async () =>{
    const response = await fetch("https://httpbin.org/post",
    method)
}

switch (2){
    case 1:
        console.log(1);
        break;
        case 3:
            break;
            case 2:
                console.log("hhhf")
                break;
                default: 4
}
