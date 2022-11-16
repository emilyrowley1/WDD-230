const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    console.table(jsObject);  // temporary checking for valid response and data parsing
    const prophets = jsObject['prophets'];

    console.log(prophets)

    prophets.forEach(displayProphets);
  });

console.log(jsObject);


function displayProphets(prophet){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.textContent = `${prophet.name} ${prophet.lastname} - ${prophet.order}`;
    card.appendChild(h2);

    let birthdate = document.createElement('p');
    birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
    card.appendChild(birthdate);

    let birthplace = document.createElement('p');
    birthplace.textContent = `Birthplace: ${prophet.birthplace}`;
    card.appendChild(birthplace);

    let image = document.createElement('img');
    image.setAttribute('src', prophet.imageurl);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);
}