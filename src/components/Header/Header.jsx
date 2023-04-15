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
      <Link to="/resister">
        <a href="">Resister</a>
      </Link>
      <Link to="/resister-rbs">
        <a href="">Resister-RBS</a>
      </Link>
    </nav>
  );
};

export default Header;
