import React, { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";

export default function ByRegion() {
  const [region, setRegion] = useState("Africa");
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    e.target.checked && setRegion(e.target.value);
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v2/region/${region}`)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, [region]);

  return (
    <div>
      <input
        type={"radio"}
        name="region"
        defaultChecked
        value="Africa"
        onChange={handleChange}
      />
      <label style={{ marginRight: "15px" }}>Africa</label>
      <input
        type={"radio"}
        name="region"
        value="Americas"
        onChange={handleChange}
      />
      <label style={{ marginRight: "15px" }}>Americas</label>
      <input
        type={"radio"}
        name="region"
        value="Asia"
        onChange={handleChange}
      />
      <label style={{ marginRight: "15px" }}>Asia</label>
      <input
        type={"radio"}
        name="region"
        value="Europe"
        onChange={handleChange}
      />
      <label style={{ marginRight: "15px" }}>Europe</label>
      <input
        type={"radio"}
        name="region"
        value="Oceania"
        onChange={handleChange}
      />
      <label>Oceania</label>

      <div className="cardsContainer">
        {countries.map((item, i) => (
          <CountryCard country={item} key={i} />
        ))}
      </div>
    </div>
  );
}
