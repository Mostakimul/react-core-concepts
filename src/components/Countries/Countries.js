import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

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
      <div className="country-container">
        {countries.map((country) => (
          <Country country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
