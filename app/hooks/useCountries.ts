// import countries from 'world-countries';
import countries from './algarve.json';



const formattedCountries = countries.map((country) => ({
  
  value: country.iso2,
  label: country.city,
  flag: country.iso2,
  latlng: country.latlng,
  region: country.country,
}));
console.log("this is my formated countries",countries)
console.log("this is my formated countries",formattedCountries)

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.label === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;
