import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/">All Countries</NavLink>
      <NavLink to="/byregion">By Region</NavLink>
      <NavLink to="/byname">By Name</NavLink>
    </div>
  );
}
