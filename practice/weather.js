var latitude; 
var longitude; 

const apiKey = "92ef2c5b8806f2d76490197a905975e8";
const locationURL = "http://api.openweathermap.org/geo/1.0/direct?q=santaquin,ut,usa&appid=92ef2c5b8806f2d76490197a905975e8";
    const getCoordinates = async () => {
    const response = await fetch(locationURL);
    jsObject = await response.json();
    console.log(jsObject);

    latitude = jsObject[0]["lat"];
    longitude = jsObject[0]["lon"];
};

const getWeather = async () => {
    await getCoordinates();

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);
    
    var icon = console.log(jsObject["weather"][0]["icon"]);
    var temp = jsObject["main"]["temp"];
    temp = ((temp - 273.15) * 1.8 + 32).toFixed(1);
    document.querySelector('#current-temp').textContent = temp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

};

getWeather();