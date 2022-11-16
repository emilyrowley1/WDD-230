var latitude; 
var longitude; 

const apiKey = "92ef2c5b8806f2d76490197a905975e8";
const getCoordinates = async () => {
    const locationURL = "http://api.openweathermap.org/geo/1.0/direct?q=santaquin,ut,usa&appid=92ef2c5b8806f2d76490197a905975e8";

    const response = await fetch(locationURL);
    jsObject = await response.json();

    latitude = jsObject[0]["lat"];
    longitude = jsObject[0]["lon"];
};

const getWeather = async () => {
    
    // get the correct place
    //await getCoordinates();
    //const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=39.9755101&lon=-111.78&appid=${apiKey}`;
    // change the response to a json object
    const response = await fetch(apiURL);
    jsObject = await response.json();

    console.log(jsObject);

    // setting the current conditions
    document.querySelector("#conditions").innerHTML = jsObject["weather"][0]["main"];
    
    // setting the icon to the correct src
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.querySelector("#weatherImg").src = iconsrc;

    // getting the temperature and converting it to F
    var temp = jsObject["main"]["temp"];
    temp = ((temp - 273.15) * 1.8 + 32).toFixed(1);
   
    // getting the windspeed
    const windspeed = jsObject["wind"]["speed"];

    // references to dom elements
    let tempobj = document.querySelector("#temperature");
    let windspeedobj = document.querySelector("#windspeed");
    let windchillobj = document.querySelector("#windchill");

    // calculate windspeed if necessary
    let windchillmsg = "Windchill: N/A";

    if (temp <= 50 && windspeed > 3){
        // formula from assignment
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchillmsg = `Windchill: ${chill}&deg; F`;
    }

    let windmesage = `${windspeed}mph Wind`;
    let tempmessage = `${temp}&deg; F`;

    tempobj.innerHTML = tempmessage;
    windspeedobj.innerHTML = windmesage;
    windchillobj.innerHTML = windchillmsg;

};

getWeather();
