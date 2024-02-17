import { Fragment, useState } from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  const [hamburger, setHamBurger] = useState(false);
  const navbarOptions = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#About",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const pageUp = () => {
    console.log("skdf");
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const hamburgerMenu = () => {
    setHamBurger(!hamburger);
  };

  return (
    <Fragment>
      <nav>
        <h3 className={classes.logo} onClick={pageUp}>
          Mayank's Portfolio
        </h3>
        <ul>
          {navbarOptions.map((option) => {
            return (
              <li key={option.link}>
                <a href={option.link}>{option.name}</a>
              </li>
            );
          })}
          <li onClick={hamburgerMenu}>
            <i
              className={`fa-solid fa-bars-staggered ${classes["mobile-menu"]}`}
            ></i>
          </li>
        </ul>
      </nav>
      <div
        className={`${classes["mobile-nav"]} ${
          hamburger ? "open-menu" : "closed-menu"
        }`}
      >
        <span onClick={() => hamburgerMenu()}>
          <i className="fa-solid fa-xmark"></i>
        </span>

        <ul>
          {navbarOptions.map((item) => (
            <li key={item.name} onClick={() => hamburgerMenu()}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
