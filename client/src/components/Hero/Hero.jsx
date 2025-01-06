import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import vivekaLogo from "../../assets/vivekaLogo.png";

const Hero = () => {
  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          <img src={vivekaLogo} className={classes.text_img} alt="vivekaLogo" />
          <h4 className={classes.caption}>
            <strong>Innovate, Elevate and Celebrate!</strong>
          </h4>
          <p className={classes.date}>February 6th-8th, 2025</p>
          <Link
            className={classes.anchorBtn}
            rel="noopener noreferrer"
            to="/events"
          >
            <Button
              link="/events"
              label="Explore Our Events"
              className={classes.btn}
            ></Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
