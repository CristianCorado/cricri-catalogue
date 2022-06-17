import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Device Catalogue test</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/iphones">Iphone Catalogue</Link>
        <Link to="/watches">Watches Catalogue</Link>
      </nav>
    </div>
  );
};

export default Home;
