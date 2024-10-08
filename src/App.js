import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllCountries from "./views/AllCountries";
import ByRegion from "./views/ByRegion";
import ByName from "./views/ByName";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import OneCountry from "./views/OneCountry";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/byregion" element={<ByRegion />} />
        <Route path="/byname" element={<ByName />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/OneCountry/:code" element={<OneCountry />} />
      </Routes>
    </div>
  );
}

export default App;
