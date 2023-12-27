import React from "react";
import "./Country.css";
const Country = (props) => {
  const { name, capital, population, flags } = props.country;
  const HandleAddBtn = props.HandleAddBtn;
  return (
    <div>
      <h3>Country Name: {name.common}</h3>
      <img src={flags.svg} alt="" className="flags" />
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <button onClick={() => HandleAddBtn(props.country)}>Add Country</button>
    </div>
  );
};

export default Country;
