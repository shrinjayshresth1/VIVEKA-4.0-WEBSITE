import React from "react";
import { useState } from "react";
import classes from "./Navbar.module.css";
import { FiMenu } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../assets/vivekaLogo.png"; // Import from public folder
const Scroll = require("react-scroll");

const Navbar = () => {
  const Drop = Scroll.Link;
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header
      className={`${!scrolled ? classes.header : classes.scrolledHeader}`}
    >
      <div className={classes.elements}>
        <div className={classes.logobox}>
          <Link to="/">
            <img src={Logo} alt="/" className={classes.logo} />
          </Link>
        </div>

        <div className={classes.navbox}>
          <ul className={classes.nav}>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="/"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link to={"/"}>Home</Link>
                
              </Drop>
            </li>
            <Link to="/events">
              <li className={`${classes.dropLink}`}>
                Events
                <FontAwesomeIcon
                  size="sm"
                  style={{
                    display: "inline-block",
                    marginLeft: ".3rem",
                    color: "white",
                  }}
                  icon={faArrowDown}
                  fade
                />
              </li>
            </Link>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="/organizers"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              ><Link to={'/organizers'}>Organizers</Link>
                
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="/about"
                spy={true}
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link to={'/about'}>About</Link>
                
              </Drop>
            </li>
            
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="/leaderboard"
                spy={true}
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link to={'/leaderboard'}>Leaderboard</Link>
                
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="/contact"
                spy={true}
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link to={'/contact'}>Contact</Link>
                Contact
              </Drop>
            </li>
          </ul>

          <div className={classes.hamburger} onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "white" }}
                size="3x"
              />
            ) : (
              <FiMenu size={20} />
            )}
          </div>
        </div>

        <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
          <ul className={classes.mobileNav}>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="/"
                spy={true}
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link to={'/'}>Home</Link>
                
              </Drop>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="/about"
                spy={true}
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link to={'/about'}>About</Link>
                
              </Drop>
            </li>
            <Link to="/events">
              <li className={`${classes.dropLink}`}>
                Events
                <FontAwesomeIcon
                  size="sm"
                  style={{
                    display: "inline-block",
                    marginLeft: ".3rem",
                    color: "white",
                  }}
                  icon={faArrowDown}
                  fade
                />
              </li>
            </Link>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="/organizers"
                spy={true}
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link to={'/organizers'}>Organizers</Link>
                
              </Drop>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="/leaderboard"
                spy={true}
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link to={'/leaderboard'}>Leaderboard</Link>
                
              </Drop>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="/contact"
                spy={true}
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Link to={'/contact'}>Contact</Link>
                
              </Drop>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
