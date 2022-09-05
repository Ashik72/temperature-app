const api_key = "8cd5cdd9fee17c801b3a4565cec848fb";

const loadAPI = async (city) => {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
   let res = await fetch(url);
   let data = await res.json();
   displayTempeture(data);
   displaylead(data);
};

const displayTempeture = (data) => {
   const temp = document.getElementById("temp");
   temp.innerText = data.main.temp;
};

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
   const inputCity = document.getElementById("input-city");
   const placeCity = document.getElementById("place-city");
   const city = inputCity.value;
   placeCity.innerText = city;
   loadAPI(city);
});

const displaylead = (data) => {
   const lead = document.getElementById("lead");
   lead.innerText = data.weather[0].main;
};
loadAPI("Dhaka");
