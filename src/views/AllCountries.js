import React, { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";

export default function AllCountries() {
  // fetch all countries on page load, then save the received array of countries in a local state (call it countries)

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="cardsContainer">
      {countries.map((item, i) => (
        <CountryCard key={i} country={item} />
      ))}
    </div>
  );
}
