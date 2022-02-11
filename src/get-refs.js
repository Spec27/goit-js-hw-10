export default function getRefs() {
  return {
    searchForm: document.querySelector('#search-box'),
    renderCountryList: document.querySelector('.country-list'),
    renderCountryInfo: document.querySelector('.country-info'),
    class: document.querySelector('body'),
  };
}
