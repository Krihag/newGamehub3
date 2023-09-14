const url = "https://api.noroff.dev/api/v1/gamehub/";

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
