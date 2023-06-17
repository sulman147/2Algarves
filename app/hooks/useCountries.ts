// import countries from 'world-countries';
import countries from './algarve.json';



const formattedCountries = countries.map((country) => ({
  
  value: country.iso2,
  label: country.city,
  flag: country.iso2,
  latlng: country.latlng,
  region: country.country,
}));

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  }

  const getByLabel = (value: string) => {
    return formattedCountries.find((item) => item.label === value);
  }

  return {
    getAll,
    getByValue,
    getByLabel
  }
};

export default useCountries;
