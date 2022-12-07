//http://api.weatherapi.com/v1/current.json?key=af012b4282c14c5b966222531211712&q=Valletta&aqi=yes

let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;

const api= "http://api.weatherapi.com/v1/current.json?key=af012b4282c14c5b966222531211712&q=Valletta&aqi=yes"

async function getWeather(){
  const response = await fetch(api);
  const data = await response.json();
  console.log(data.location.name);
  console.log(data.current.condition.icon);
  console.log(data.current.temp_c);
  console.log(data.current.condition.text);

  document.getElementById("location").textContent = data.location.name;
  document.getElementById("image").src = 'http:' + data.current.condition.icon;
  document.getElementById("temp-value").textContent = data.current.temp_c;
  document.getElementById("climate").textContent = data.current.condition.text;

}

getWeather();
