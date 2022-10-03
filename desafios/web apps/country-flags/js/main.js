import {flags} from './model/flags.js';

function insertFlag ({name, image}) {
  return `<div class="col-2 flag text-center">
         <img src="${image}" alt="${name}"> 
         <p>${name}</p>
       </div>`
};

const addCountry = flags.map((country) => insertFlag(country)).join('');

let country = document.querySelector('.row')
country.innerHTML = addCountry