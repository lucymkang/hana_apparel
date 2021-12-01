import { React, useState } from "react";
import logo from "../assets/hana_logo.png";

const Navbar = () => {
  const [showProductsBar, setShowProductsBar] = useState(false);
  const [showNavbarToggler, setShowNagbarToggler] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ position: "sticky", top: "0" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Hana Apparel Logo" id="navbar_logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNagbarToggler(!showNavbarToggler)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          style={showNavbarToggler ? { display: "block" } : { display: "none" }}
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => setShowProductsBar(!showProductsBar)}
              >
                Products
              </a>
              <div
                style={
                  showProductsBar ? { display: "block" } : { display: "none" }
                }
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item" href="/products">
                  All Products
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Tops
                </a>
                <a className="dropdown-item" href="#">
                  Outerwears
                </a>
                <a className="dropdown-item" href="#">
                  Jeans
                </a>
                <a className="dropdown-item" href="#">
                  Pants
                </a>
                <a className="dropdown-item" href="#">
                  Shorts & Skirts
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
