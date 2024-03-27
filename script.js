const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3cd4f23b5dmshbeeddf89d334e68p1b214ajsn0ef2b0d7a801',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like + "°c"
		humidity.innerHTML = response.humidity + "%"
		max_temp.innerHTML = response.max_temp + "°c"
		min_temp.innerHTML = response.min_temp + "°c"
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp + "°c"
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed + "km/h"
	})
	.catch(err => console.log(err));
}

submit.addEventListener("click", (e)=>{
	console.log(city.value)
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi");

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct_c.innerHTML = response.cloud_pct
		feels_like_c.innerHTML = response.feels_like + "°c"
		humidity_c.innerHTML = response.humidity + "%"
		max_temp_c.innerHTML = response.max_temp + "°c"
		min_temp_c.innerHTML = response.min_temp + "°c"
		sunrise_c.innerHTML = response.sunrise
		sunset_c.innerHTML = response.sunset
		temp_c.innerHTML = response.temp + "°c"
		wind_degrees_c.innerHTML = response.wind_degrees
		wind_speed_c.innerHTML = response.wind_speed + "km/h"
	})
	.catch(err => console.log(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct_l.innerHTML = response.cloud_pct
		feels_like_l.innerHTML = response.feels_like + "°c"
		humidity_l.innerHTML = response.humidity + "%"
		max_temp_l.innerHTML = response.max_temp + "°c"
		min_temp_l.innerHTML = response.min_temp + "°c"
		sunrise_l.innerHTML = response.sunrise
		sunset_l.innerHTML = response.sunset
		temp_l.innerHTML = response.temp + "°c"
		wind_degrees_l.innerHTML = response.wind_degrees
		wind_speed_l.innerHTML = response.wind_speed + "km/h"
	})
	.catch(err => console.log(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ahmedabad', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct_a.innerHTML = response.cloud_pct
		feels_like_a.innerHTML = response.feels_like + "°c"
		humidity_a.innerHTML = response.humidity + "%"
		max_temp_a.innerHTML = response.max_temp + "°c"
		min_temp_a.innerHTML = response.min_temp + "°c"
		sunrise_a.innerHTML = response.sunrise
		sunset_a.innerHTML = response.sunset
		temp_a.innerHTML = response.temp + "°c"
		wind_degrees_a.innerHTML = response.wind_degrees
		wind_speed_a.innerHTML = response.wind_speed + "km/h"
	})
	.catch(err => console.log(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct_n.innerHTML = response.cloud_pct
		feels_like_n.innerHTML = response.feels_like + "°c"
		humidity_n.innerHTML = response.humidity + "%"
		max_temp_n.innerHTML = response.max_temp + "°c"
		min_temp_n.innerHTML = response.min_temp + "°c"
		sunrise_n.innerHTML = response.sunrise
		sunset_n.innerHTML = response.sunset
		temp_n.innerHTML = response.temp + "°c"
		wind_degrees_n.innerHTML = response.wind_degrees
		wind_speed_n.innerHTML = response.wind_speed + "km/h"
	})
	.catch(err => console.log(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Melbourne', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct_m.innerHTML = response.cloud_pct
		feels_like_m.innerHTML = response.feels_like + "°c"
		humidity_m.innerHTML = response.humidity + "%"
		max_temp_m.innerHTML = response.max_temp + "°c"
		min_temp_m.innerHTML = response.min_temp + "°c"
		sunrise_m.innerHTML = response.sunrise
		sunset_m.innerHTML = response.sunset
		temp_m.innerHTML = response.temp + "°c"
		wind_degrees_m.innerHTML = response.wind_degrees
		wind_speed_m.innerHTML = response.wind_speed + "km/h"
	})
	.catch(err => console.log(err));

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct_t.innerHTML = response.cloud_pct
		feels_like_t.innerHTML = response.feels_like + "°c"
		humidity_t.innerHTML = response.humidity + "%"
		max_temp_t.innerHTML = response.max_temp + "°c"
		min_temp_t.innerHTML = response.min_temp + "°c"
		sunrise_t.innerHTML = response.sunrise
		sunset_t.innerHTML = response.sunset
		temp_t.innerHTML = response.temp + "°c"
		wind_degrees_t.innerHTML = response.wind_degrees
		wind_speed_t.innerHTML = response.wind_speed + "km/h"
	})
	.catch(err => console.log(err));