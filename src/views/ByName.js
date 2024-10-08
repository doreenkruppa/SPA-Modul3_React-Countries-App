import React, { useEffect, useState } from "react";
import SearchResult from "../components/SearchResult";

export default function ByName() {
  //save the user input in a local state (call it searchInput), then fetch that country on submit, then save the received country in another local state (call it country) - always check how does the response look like using console.log before saving it in the state.
  const [searchInput, setSearchInput] = useState("");
  const [country, setCountry] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://restcountries.com/v2/name/${searchInput}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: "30px" }}>
        <input type="text" onChange={handleChange} />
        <button>search</button>
      </form>
      {<SearchResult country={country} />}
    </div>
  );
}
