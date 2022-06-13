import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="copy-right">
            <medium className='copy-color'> Lakota Rose's </medium><medium className="footer-color"> HUNTR &copy;{new Date().getFullYear()} | No Rights Reserved | Open-Source</medium>
      </div>
    </footer>
  );
};

export default Footer;