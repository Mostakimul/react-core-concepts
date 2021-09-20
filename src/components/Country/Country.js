import React from 'react';
import './Country.css';

const Country = (props) => {
  // object desctructuring
  const { name, flag, capital, population, region } = props.country;
  return (
    <div className="country">
      <img src={flag} alt={name} />
      <h4>{name}</h4>
      <p>
        Capital: {capital} || Population: {population}
      </p>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
