import { showLoading } from "./loading.js";

//Fetch
const fetchDrinks = async (url) => {
  showLoading();
  try {
    const data = await fetch(url);
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
