import React from 'react';
import './Country.css';

const Country = (props) => {
  return (
    <div className="country">
      <h4>{props.name}</h4>
      <p>
        Capital: {props.capital} || Population: {props.population}
      </p>
    </div>
  );
};

export default Country;
