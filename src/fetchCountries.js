const BASE_URL = 'https://restcountries.com/v3.1';
function fetchCoutryById(countryId) {
  return fetch(`${BASE_URL}/name/${countryId}?fields=name,capital,population,flags,languages`).then(
    response => response.json(),
  );
}
export default { fetchCoutryById };
