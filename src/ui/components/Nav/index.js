import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ITEMS } from "../../utils/constants";

const Nav = () => {
  const location = useLocation();
  console.log("🚀 ~ file: index.js ~ line 6 ~ Nav ~ location", location);

  const style = {
    padding: "16px",
    border: "1px solid rgb(232, 232, 232)",
    borderRadius: "3px",
    width: "auto",
    display: "inline-block",
    marginTop: "25px",
  };

  let items = [...ITEMS];

  const menuItems = items.map((item) => {
    return item.path === location.pathname ? null : (
      <span>
        <Link to={item.path}>{item.description}</Link>
        <span style={{ color: "#66CC00", fontWeight: "bold" }}> / </span>
      </span>
    );
  });

  return (
    <nav>
      <div style={style}>
        <span>{menuItems}</span>
      </div>
    </nav>
  );
};

export default Nav;
