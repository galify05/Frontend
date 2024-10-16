const dateText = document.querySelector("#today");
const cityText = document.querySelector(".city-text");
const weatherText = document.querySelector("#weather");
const temperature = document.querySelector(".temperature-now-text");
const iconBig = document.querySelector("#icon-big");
const arrayMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];
const arrayDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let j = 0;

const weekdayBlock = document.querySelector(".weekDay-block");

async function nikitaWeather() {
  const res = await fetch("http://api.weatherapi.com/v1/current.json?key=e4b09edc0aae4a3cb7782230241610&q=Berlin&aqi=no");
  const data = await res.json();

  const icon = data.current.condition.icon;

  cityText.textContent = data.location.name;
  temperature.textContent = `${Math.round(data.current.temp_c)}°`;
  weatherText.textContent = data.current.condition.text;
  iconBig.setAttribute("src", `https:${icon}`);
  const todayDate = new Date(`${data.location.localtime}`);

  dateText.textContent = `
  ${arrayDays[todayDate.getDay()]},
  ${arrayMonth[todayDate.getMonth()]},
  ${todayDate.getFullYear().toString().slice(-2)}
  `;
 
  const res2 = await fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=45292927a9414bd2a4a82210241610&q=Berlin&days=7&aqi=no&alerts=no"
  );
  const data2 = await res2.json();
  console.log(data2);

  for (let i = 1; i < 8; i++) {
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("day");

    const newDiv1 = document.createElement("div");
    newDiv1.classList.add("icon-small");
    let img1 = document.createElement("img");
    img1.setAttribute("height", "50");
    const iconSmall = data2.forecast.forecastday[i];
    img1.setAttribute("src", `https:${iconSmall.day.condition.icon}`);
    newDiv1.appendChild(img1);

    const newDiv2 = document.createElement("div");
    newDiv2.classList.add("weekDay");
    const p2 = document.createElement("p");
    p2.classList.add("text-weekDay");
    p2.textContent = `${arrayDays[(todayDate.getDay() + j) % 7].toString().slice(0, 3)}`;
    newDiv2.appendChild(p2);
    j = (j + 1) % 7;

    const newDiv3 = document.createElement("div");
    newDiv3.classList.add("temperature-max");
    const p3 = document.createElement("p");
    p3.classList.add("temperature-max-text");
    const maxTemp3 = data2.forecast.forecastday[i];
    p3.textContent = `${Math.round(maxTemp3.day.maxtemp_c)}°`;
    newDiv3.appendChild(p3);

    const newDiv4 = document.createElement("div");
    newDiv4.classList.add("temperature-min");
    const p4 = document.createElement("p");
    p4.classList.add("text-weekDay");
    const minTemp4 = data2.forecast.forecastday[i];
    p4.textContent = `${Math.round(minTemp4.day.mintemp_c)}°`;
    newDiv4.appendChild(p4);

    mainDiv.append(newDiv1, newDiv2, newDiv3, newDiv4);

    weekdayBlock.append(mainDiv);
  }
}
nikitaWeather();