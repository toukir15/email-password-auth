import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <a href="">Home</a>
      </Link>
      <Link to="/Login">
        <a href="">Login</a>
      </Link>
      <Link to="/Resister">
        <a href="">Resister</a>
      </Link>
    </nav>
  );
};

export default Header;
