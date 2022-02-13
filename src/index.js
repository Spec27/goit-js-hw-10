import { debounce } from 'lodash';
import './css/styles.css';
import samplesCountriesListTpl from './templates/countries-list.hbs';
import samplesCountriesTpl from './templates/countries.hbs';
import API from './fetchCountries';
import getRefs from './get-refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onFormValue, DEBOUNCE_DELAY));
refs.searchForm.classList.add('form-control');
refs.class.classList.add('body-js');

function onFormValue(event) {
  event.preventDefault();
  const serchQuery = event.target.value.trim();
  clearList();

  API.fetchCoutryById(serchQuery).then(renderCountryCard).catch(onError);
}

function renderCountryCard(country) {
  let countryLength = country.length;
  
  if (countryLength >= 10) {
    manyСoincidences();
  }

  if (countryLength > 1 && countryLength < 10) {
    const marcupInfo = samplesCountriesListTpl(country);
    refs.renderCountryList.innerHTML = marcupInfo;
  }
  if (countryLength === 1) {
    const marcup = samplesCountriesTpl(country);
    refs.renderCountryInfo.innerHTML = marcup;
  }
  if (country.status === 404) {
    clearList();
    onError();
  }
}
function manyСoincidences() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}
function onError() {
  Notify.failure('Oops, there is no country with that name.');
}

function clearList() {
  refs.renderCountryList.innerHTML = '';
  refs.renderCountryInfo.innerHTML = '';
}
