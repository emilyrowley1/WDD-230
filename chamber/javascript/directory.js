fetch("json/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    console.table(jsObject);  // temporary checking for valid response and data parsing
    const businesses = jsObject['businesses'];

    console.log(businesses)

    businesses.forEach(displayBusinesses);
  });



function displayBusinesses(business){
    let card = document.createElement('section');
    let image = document.createElement('img');
    image.setAttribute('src', business.logo);
    card.appendChild(image);

    let address = document.createElement('p');
    address.textContent = `${business.address}`;
    card.appendChild(address);

    let phone = document.createElement('p');
    phone.textContent = `${business.phone}`;
    card.appendChild(phone);

    let website = document.createElement('a');
    if ((business.website).length > 50) {
        website.innerText = "check out our webpage";
    }
    else {
        website.innerText = business.website;
    }
    website.setAttribute('href', business.website)
    card.appendChild(website);


    document.querySelector('.cards').appendChild(card);
}