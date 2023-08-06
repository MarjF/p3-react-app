import React from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <header className={style.header}>
        <div className={style.logoContainer}>
          <Link to="/">
            <img className={style.homeLogo} src={logo} alt="Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link
                to="/calculators"
                className={
                  location.pathname === "/calculators" ? style.active : ""
                }
              >
                Calculators
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? style.active : ""}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
