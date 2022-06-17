import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ITEMS } from "../../utils/constants"

const Nav = () => {
  const location = useLocation();
  console.log("🚀 ~ file: index.js ~ line 6 ~ Nav ~ location", location);

  let items = [ ...ITEMS ];

  let menuItems = items.map((item) => {
    return (
        item.path === location.pathname ? null : <Link to={ item.path }> { item.description }</Link>
    )
  });

  return (
    <nav>
      { menuItems }
    </nav>
  );
};

export default Nav;
