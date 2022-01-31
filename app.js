const URL = "www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
  showDrinks(URL);
});

const showDrinks = async (url) => {
  const data = await fetchDrinks(url);
  console.log(data);
};

const fetchDrinks = async (url) => {
  try {
    const data = await fetch(url);
    console.log(data);
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
