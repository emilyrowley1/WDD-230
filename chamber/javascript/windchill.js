function setWindchill(temp, windspeed){
    // references to dom elements
    let tempobj = document.querySelector("#temperature");
    let windspeedobj = document.querySelector("#windspeed");
    let windchillobj = document.querySelector("#windchill");

    // calculate windspeed of necessary
    let windchillmsg = "N/A";

    if (temp <= 50 && windspeed > 3){
        // formula from assignment
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchillmsg = `Windchill: ${chill}&deg; F`;
    }

    let windmesage = `Windspeed: ${windspeed}`;
    let tempmessage = `Temperature: ${temp}&deg; F`;

    tempobj.innerHTML = tempmessage;
    windspeedobj.innerHTML = windmesage;
    windchillobj.innerHTML = windchillmsg;
    // windspeedobj.innerHTML = windspeed;
    // windchillobj.innerHTML = windchillmsg;
}

setWindchill(49, 10);