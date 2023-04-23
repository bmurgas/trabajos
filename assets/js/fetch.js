/*function getdata(id) {
   let data = fetch("https://digimon-api.vercel.app/api/digimon")
    console.log(data);

    data
        .then(resp => {
            return resp.json();
        }) 
        .then(json => {
            console.log(json);
        })
        .catch(error => {
            console.log(error);
        })
          
}
getdata();*/
const searchButton = document.querySelector('#search-button');
const digimonNameInput = document.querySelector('#digimon-name');
const resultsDiv = document.querySelector('#results');
const resultsDiva = document.querySelector('#resultsa');

searchButton.addEventListener('click', () => {
  const digimonName = digimonNameInput.value;
  fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        resultsDiv.textContent = 'No results found.';
      } else {
        resultsDiv.innerHTML = '';
        resultsDiva.innerHTML = ''; 
        data.forEach(digimon => {
          const name = document.createElement('h2');
          name.textContent = digimon.name;
          const image = document.createElement('img');
          image.src = digimon.img;
          const level = document.createElement('p');
          level.textContent = `Level: ${digimon.level}`;
          resultsDiv.appendChild(name);
          resultsDiva.appendChild(image);
          resultsDiv.appendChild(level);
        });
      }
    })
    .catch(error => console.error(error));
});