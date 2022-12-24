import React from "react";
import "./Contact.scss";

import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>be in touch with us:</span>
        <div className="mail">
          <input placeholder="Enter Your Email" type="email" />
          <button>join us</button>
        </div>
        <div className="social">
          <BsFacebook size={25} />
          <BsInstagram size={25} />
          <BsTwitter size={25} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
