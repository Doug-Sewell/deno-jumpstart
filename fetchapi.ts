
//Fetches data from the server. In this case, several Star Wars movies.
const res = await fetch('https://swapi.dev/api/films');
//Prases the data into json.
const data = await res.json();

console.log(data);