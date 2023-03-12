// встановлюємо базову адресу, на яку буде виконуватись запит
const COUNTRIES_URL = 'https://restcountries.com/v3.1/name/';
//встановлюємо обєкт який містить параметри запиту
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages,',
});

// створюємо запит на сервер за назвою
export const fetchCountries = name => {
  return fetch(`${COUNTRIES_URL}${name}?${searchParams}`).then(response => {
    if (response.status === 404) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
