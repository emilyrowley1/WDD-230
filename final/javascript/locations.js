let templeList = [];
var latitude; 
var longitude; 
const apiKey = "92ef2c5b8806f2d76490197a905975e8";


async function getTemples() {
    let urlFetch = await fetch("hotels.json");

   templeList = await urlFetch.json();
}

const getWeather = async (name) => { 
    
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  // change the response to a json object
  const response = await fetch(apiURL);
  jsObject = await response.json();

  console.log(jsObject);

  // setting the current conditions
  document.querySelector(`#${name}conditions`).innerHTML = jsObject["weather"][0]["main"];

  console.log(jsObject["weather"][0]["main"]);
  
  // setting the icon to the correct src
  const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
  document.querySelector(`#${name}weatherImg`).src = iconsrc;

  // // getting the temperature and converting it to F
  var temp = jsObject["main"]["temp"];
  temp = ((temp - 273.15) * 1.8 + 32).toFixed(1);
 
  // getting the windspeed
  const windspeed = jsObject["wind"]["speed"];

  // references to dom elements
  let tempobj = document.querySelector(`#${name}temperature`);
  let windspeedobj = document.querySelector(`#${name}windspeed`);
  let windchillobj = document.querySelector(`#${name}windchill`);

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

function displayCard(templeList) {

    let templeString = ""
    templeList.forEach(temple => {
      const name = temple["shortName"];
      latitude = temple["lat"];
      longitude = temple['long'];
        templeString = templeString.concat(`
        <section><img src="${temple['imageUrl']}" alt="${temple['name']}"><h2>${temple['name']}</h2><p>${temple['description']}</p><div class="info"><div class="weather">
        <div><h2>Weather</h2></div>
        <img id="${name}weatherImg" src="images/weather.webp" alt="Weather Icon">
        <div id="${name}temperature">temp</div>
        <div id="${name}conditions">current conditions</div>
        <div id="${name}windspeed">wind speed</div>
        <div id="${name}windchill">wind chill</div>
</div><div class="reservation"><button><a href="reservations.html">Reserve Now</a></button><div><input class="mycheck" type="checkbox" id="${name}checkbox" onclick"${likeTemple(this)}">
Like This Temple!<br></div></div></section>`)

      document.querySelector("#temples").innerHTML = templeString
      
      getWeather(temple["shortName"]);
    }); 
}

async function main() {
    await getTemples();
    await displayCard(templeList);
    
}

main();


const LIKES_KEY = "temple-likes";

function initTempleLikes(){
    let likes_string = localStorage.getItem(LIKES_KEY);
    if (likes_string==null){
        likes_string="[]";
        localStorage.setItem(LIKES_KEY, likes_string);
    }
}


// This function handles when a user checks an individual checkbox
// First, it updates the list of "liked" temples by either adding or removing it
// depending on if the box is checked or unchecked.
// push adds an item to a list
// splice removes an item from a list.
// Finally, the new list is put into local storage for later use. 
function likeTemple(item){
    console.log("like temple function");
    let likes_string = localStorage.getItem(LIKES_KEY);
    let likeslist = JSON.parse(likes_string);
    if (item.checked){
        if (!likeslist.includes(item.shortName)){
            likeslist.push(item.shortName);
        }
    }
    else{
        if (likeslist.includes(item.shortName)){
            likeslist.splice(likeslist.indexOf(item.shortName), 1);
        }
    }
    localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
}

// This function checks an individual box for a like
function displayLike(item){
    let obj = document.getElementById(item);
    obj.checked = true;
}

// Call the init function when the page loads
initTempleLikes();

// Fetch the temple data and display the cards,
// Then display the likes after the cards are built
fetch("hotels.json")
        .then((response) => {            
            console.log(response.json());
            return response.json();
        })
        .then(() => {
            // Turn the string value from local storage into a Java array
            let likes_string = localStorage.getItem(LIKES_KEY);
            let likeslist = JSON.parse(likes_string);            

            // Set the likes
            likeslist.forEach(displayLike);
        });
