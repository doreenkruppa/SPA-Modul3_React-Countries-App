import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";

export default function OneCountry() {
  let { code } = useParams();
  const [singleCountry, setSingleCountry] = useState({});
  console.log("country code", code);

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
      .then((response) => response.json())
      .then((data) => setSingleCountry(data));
  }, [code]);
  return (
    <div className="cardsContainer">
      {<CountryCard country={singleCountry} />}
    </div>
  );
}
