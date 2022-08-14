import React from "react";
import { Link } from "react-router-dom";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Sneakers<span>Store</span>
        </h3>

        <p className="footer-links">
          <Link to="/" className="link-1">
            Home
          </Link>

          <Link to="/products">Store</Link>
          <Link to="/address">Address</Link>
        </p>

        <p className="footer-company-name">BrandShoes</p>
      </div>

      <div className="footer-center">
        <div>
          <p>
            <span>Chuy</span> Bishkek, KyrgyzstaLink
          </p>
        </div>

        <div>
          <p>+996500500500</p>
        </div>

        <div>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons"></div>
      </div>
    </footer>
  );
};

export default Footer;
