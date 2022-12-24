import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h3>Categories</h3>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h3>Links</h3>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h3>About</h3>
          <p>
            GoStore caters to thoughtful shoppers who appreciate unique designs
            and top quality pieces you just can’t find anywhere else. We are
            constantly curating fresh new collections and looking for the next
            big thing our customers will love. Founded in Vienna in 2019, we are
            proud to be your Online Clothing Shop that you can rely on for our
            expert service and care.
          </p>
        </div>
        <div className="item">
          <h3>Contact</h3>
          <p>
            Contact us with any questions you may have. We will get back to you
            within 24 hour.
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">GoStore </span>
          <span className="copyright">
            &copy; {new Date().getFullYear()}. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
