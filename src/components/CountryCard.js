import React from "react";
import { NavLink } from "react-router-dom";

export default function CountryCard({ country }) {
  //name,capital,flag,area,population
  return (
    <NavLink className="link-card" to={`/OneCountry/${country.alpha2Code}`}>
      <div
        className="singleCard"
        style={{
          border: "1px solid black",
          padding: "10px",
          width: "300px",
          height: "370px",
          borderRadius: "20px",
          marginBottom: "20px",
        }}
      >
        <img src={country.flag} alt={country.name} width="200px" />
        <h1>{country.name}</h1>
        <span style={{ fontSize: "27px" }}>
          <b>Capital:</b> {country.capital}
        </span>
        <span style={{ fontSize: "27px" }}>
          <b> Area:</b> {country.area} km<sup>2</sup>
        </span>
        <div style={{ fontSize: "27px" }}>
          <b>Population:</b> {country.population}
        </div>
      </div>
    </NavLink>
  );
}
