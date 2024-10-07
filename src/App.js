import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import AllCountries from "./components/views/AllCountries";
import ByRegion from "./components/views/ByRegion";
import ByName from "./components/views/ByName";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import OneCountry from "./components/views/OneCountry";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/byregion" element={<ByRegion />} />
        <Route path="/byname" element={<ByName />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/country/:code" element={<OneCountry />} />
      </Routes>
    </div>
  );
}

export default App;
