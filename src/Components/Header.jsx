import React from "react";
import Weather from "./Weather";
import ICON from "../assets/icons/news.png";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          News-One <img src={ICON} alt="icon" height={50} width={50} />
        </span>

        <Weather />
      </div>
    </nav>
  );
}

export default Header;
