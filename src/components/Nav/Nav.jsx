import React, { useState } from "react";
import Button from "./Button/Button";
import menuItems from "./MenuItems";
import Logo from "../../../src/assets/logo.svg"
import "./Nav.css";

const Nav = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-logo">
          <img src={Logo} alt="" />
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Login</Button>
      </nav>
    </>
  );
};

export default Nav;
