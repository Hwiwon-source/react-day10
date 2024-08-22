import React, { useState } from "react";
import "./Menu.css";

const menuList = [
  "여성",
  "Divided",
  "남성",
  "신생아/유아",
  "아동",
  "H&M Home",
  "Sale",
  "지속가능성",
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    // alert("check")
    setIsOpen(!isOpen);
  };

  return (
    <div className="Menu">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-menu ${isOpen ? "show" : ""}`}>
        {menuList.map((item, idx) => {
          return (
            <li key={idx}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
