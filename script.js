const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7b9d2b18d3msha703b44ea3e88aep125f74jsnfa2bff83258f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
    cityName.innerHTML = city;  
   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}',options)
   .then(response => response.json())
   .then((response) => {
       console.log(response);
       document.getElementById("cityName").innerText = city;
       document.getElementById("temp").innerText = response.temp;
       document.getElementById("temp2").innerText = response.temp2;
       document.getElementById("min_temp").innerText = response.min_temp;
       document.getElementById("max_temp").innerText = response.max_temp;
       document.getElementById("cloud_pct").innerText = response.cloud_pct;
       document.getElementById("cloud_pct2").innerText = response.cloud_pct2;
       document.getElementById("feels_like").innerText = response.feels_like;
       document.getElementById("humidity").innerText = response.humidity;
       document.getElementById("wind_speed").innerText = response.wind_speed;
       document.getElementById("wind_speed2").innerText = response.wind_speed2;
       document.getElementById("wind_degrees").innerText = response.wind_degrees;
       document.getElementById("sunrise").innerText = response.sunrise;
       document.getElementById("sunset").innerText = response.sunset;
   })
   .catch(err => console.error(err));
};
document.getElementById("searchForm").addEventListener("submit",(e) => {
    e.preventDefault();
    const city = document.getElementById("city").value;
    getWeather(city);
});
getWeather("Delhi");
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}





