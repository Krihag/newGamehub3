// const url = "https://api.noroff.dev/api/v1/gamehub/";

const corsAnywhereUrl = "https://noroffcors.onrender.com/";
const originalUrl =
  "https://gamehubapi.kristianhage.no/wp-json/wc/store/products";
const url = corsAnywhereUrl + originalUrl;

export default async function fetchGames(id = "") {
  try {
    const response = await fetch(url + id);
    const games = await response.json();
    return games;
  } catch (error) {
    console.log(error);
    return error;
  }
}
