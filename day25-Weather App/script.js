const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
let city = document.querySelector("input");
const back = {
  clear:
    "https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  smoke:
    "https://images.pexels.com/photos/691574/pexels-photo-691574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  clouds:
    "https://images.pexels.com/photos/9963245/pexels-photo-9963245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  rain: "https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

  haze: "https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

city.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API_KEY}&units=metri`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        document.querySelector(".output").style.display = "flex";

        let backImg = data.weather[0].main.toLowerCase();
        if (backImg.includes("https://images.pexels.com/photos/")) {
          document.querySelector(
            "body"
          ).style.backgroundImage = `url(${back[backImg]})`;
        }

        document.querySelector(
          ".city"
        ).innerHTML = `${data.name}, ${data.sys.country}`;

        document.querySelector(
          ".latit"
        ).innerHTML = `Latitude: ${data.coord.lat}`;
        document.querySelector(
          ".longit"
        ).innerHTML = `Longitude: ${data.coord.lon}`;

        let time = new Date();
        let month = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        let weekday = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];

        document.querySelector(".date").innerHTML = `${time.getDate()} ${
          month[time.getMonth()]
        } (${weekday[time.getDay()]}), ${time.getFullYear()}`;

        document.querySelector(".temp").innerHTML = `${round(
          data.main.temp
        )}&#8451;`;

        document.querySelector(".minmax").innerHTML = `${round(
          data.main.temp_min
        )}&#8451; (min) / ${round(data.main.temp_max)}&#8451; (max)`;

        document.querySelector(
          ".weather"
        ).innerHTML = `${data.weather[0].main}`;

        document.querySelector(
          ".humid"
        ).innerHTML = `Humidity: ${data.main.humidity}%`;

        document.querySelector(
          ".press"
        ).innerHTML = `Pressure: ${data.main.pressure} Pa`;

        document.querySelector(
          ".windspeed"
        ).innerHTML = `Wind Speed: ${data.wind.speed} km/h`;
      })
      .catch(() => {
        alert("No such city");
      });
  }
});

function round(temp) {
  return Math.round((temp - 273) * 100) / 100;
}
