let templeList = []

async function getTemples() {
    let urlFetch = await fetch("hotels.json");

   templeList = await urlFetch.json();
}

function selectLocation(templeList) {
    let locationString = ""
    templeList.forEach(temple => {
        locationString = locationString.concat(`
        <option value="${temple["name"]}">${temple["name"]}</option>`)
    
    document.querySelector("#location").innerHTML = locationString
    }); 
}

async function main() {
    await getTemples();
    await selectLocation(templeList);
    
}

main();