import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./Navbar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-wrap">
        <div>
          <div className="login-button">
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        </div>
        <div className="logo-section">
          <img
            width="100px"
            src="https://static.vecteezy.com/system/resources/previews/023/871/762/non_2x/hm-brand-logo-symbol-black-design-hennes-and-mauritz-clothes-fashion-illustration-free-vector.jpg"
            alt="h&mLogo"
          />
        </div>
        <div className="menu-area">
          <Menu />
          <div className="search-box m-0">
            <FontAwesomeIcon icon={faSearch} />
            <input className="search-input" type="text" placeholder="드레스" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
