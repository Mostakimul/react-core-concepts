import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetchCountries();
  }, []);

  // country fetching function
  async function fetchCountries() {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`);
    const data = await res.json();
    // console.log(data);
    setCountries(data);
  }

  return (
    <div>
      <h3>Hello! Have a world tour!:</h3>
      {countries.map((country) => (
        <Country
          name={country.name}
          capital={country.capital}
          population={country.population}
          key={country.name}
        />
      ))}
    </div>
  );
};

export default Countries;
