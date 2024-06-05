// TODO write your code here
const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
const cardTemplate = document.querySelector('#cardTemplate');
const cardsContainer = document.querySelector('#cardsContainer');
const infoContainer = document.querySelector('#infoContainer');
const infoTemplate = document.querySelector('#infoTemplate')

fetch(url)
.then(response => response.json())
.then((data) => {
  const pokeData = data.results;
  console.log(pokeData);
  pokeData.forEach((singleData) => {
  console.log(singleData)
  fetch(singleData.url)
    .then(response => response.json())
    .then((pokemon) => {
      console.log(data);
      const cardClone = cardTemplate.content.cloneNode(true);
      cardClone.querySelector('img').src = pokemon.sprites.front_default;
      cardClone.querySelector('h2').innerText = pokemon.name
      cardClone.querySelector('p').innerText = pokemon.types.map(t => t.type.name)

      cardClone.querySelector('a').addEventListener('click', () => {
        const infoClone = infoTemplate.content.cloneNode(true)
        infoContainer.innerHTML = ''
        
        infoClone.querySelector('img').src = pokemon.sprites.front_default;
        infoClone.querySelector('h2').innerText = pokemon.name
        infoClone.querySelector('p').innerText = pokemon.types.map(t=> t.type.name)

        infoContainer.appendChild(infoClone)
      })
      cardsContainer.appendChild(cardClone)
    })
  });
})
