import getElement from "./src/getElement.js";
import fetchDrinks from "./src/fetchDrinks.js";
import { showLoading } from "./src/loading.js";
import { hideLoading } from "./src/loading.js";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
  showDrinks(URL);
});

//Show drinks
const showDrinks = async (url) => {
  const data = await fetchDrinks(url);
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

const displayDrinks = ({ drinks }) => {
  const section = getElement(".section-center");
  const title = getElement(".title");

  if (!drinks) {
    hideLoading();
    title.textContent = "sorry, no drinks matched your search";
    section.innerHTML = null;
    return;
  }
  const newDrinks = drinks
    .map((drink) => {
      // console.log(drink);
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="cocktail" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};

//form
const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const form = getElement(".search-form");
const input = getElement("[name='drink']");

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  showDrinks(`${baseURL}${value}`);
});

const setDrink = (section) => {
  section.addEventListener("click", function (e) {
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("drink", id);
  });
};
