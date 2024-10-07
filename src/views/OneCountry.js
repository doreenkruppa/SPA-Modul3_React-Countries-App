import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function OneCountry() {
  let { code } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v2/alpha/${code}`)
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, [code]);
  console.log(country);

  return (
    <div>
      <h1>{country.name}</h1>
    </div>
  );
}
