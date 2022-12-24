import React, { useState } from "react";
import {
  MdPersonOutline,
  MdSearch,
  MdFavoriteBorder,
  MdShoppingCart,
} from "react-icons/md";
import "./Navbar.scss";

import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

let activeStyle = {
  textDecoration: "#0075FF wavy underline",
  color: "#0075FF",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const total = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantitiy));
    return total.toFixed(0);
  };

  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              HomePage
            </NavLink>
          </div>
          <div className="item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/products/category/womens-dresses"
            >
              Women
            </NavLink>
          </div>
          <div className="item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/products/category/mens-shirts"
            >
              Men
            </NavLink>
          </div>
          <div className="item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/products/category/womens-jewellery"
            >
              Jewellery
            </NavLink>
          </div>
        </div>
        <div className="center">
          <NavLink to="/" className="logo">
            Go Store
          </NavLink>
        </div>

        <div className="icons">
          <MdSearch size={25} />
          <MdPersonOutline size={25} />
          <MdFavoriteBorder size={25} />
          <div className="cartIcon" onClick={() => setOpen(!open)}>
            <MdShoppingCart size={25} />
            <span>{total()}</span>
          </div>
        </div>
        {open && <Cart />}
      </div>
    </nav>
  );
};

export default Navbar;
