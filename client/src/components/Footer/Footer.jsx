import React from "react";
import vivekaLogo from "../../assets/vivekaLogo.png";

import classes from "./Footer.module.css";

const vivekainsta = "https://www.instagram.com/techfusionclub_srmu/";
const vivekalinkedin = "https://www.linkedin.com/in/techfusion-club/";
const sambhavitwitter = "https://www.facebook.com/techfusionclubsrmu/";



const shrinjayurl = "https://www.linkedin.com/in/shrinjay-shresth-036010215/";
const sankalpurl = "https://www.linkedin.com/in/sankalp-jaiswal-413404257/";
const ksgurl = "https://www.linkedin.com/in/kushagra-chaturvedi/";

const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <img
                className={classes.footer_sambhav_image}
                src={vivekaLogo}
                alt="vivekaLogo"
              ></img>
            </div>
            <div>
              {/* <h1 className={classes.footer_sambhav}>Viveka 4.0</h1> */}
            </div>
          </div>
          <p className={classes.footer_sambhav_description}>
            Viveka 4.0 is an annual techno-cultural fest of Shri Ramswaroop Memorial University organised by TechFusion Club. Let&apos;s
            make a Tech move.
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={vivekainsta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                href={vivekalinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>{" "}
            </div>
            <div>
              <a
                href={sambhavitwitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/facebook-circled.png" alt="" />
              </a>  </div> 
          </div>
        </div>
        
        <div className={classes.footer_second}>
          <h2 className={classes.footer_menu_heading}>Menu</h2>
          <h6 className={classes.footer_page_link} onClick={() => window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' })}>
            About Us
          </h6>
          <h6 className={classes.footer_page_link}>Term of Use</h6>
          <h6 className={classes.footer_page_link}>Privacy Policy</h6>
          
          
        </div>
        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt=""
              />
            </div>
            <div>
              <p>Shri Ramswaroop Memorial University, Lucknow-Deva Road </p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png"
                alt=""
              />
            </div>
            <div>
              <p>9555686979</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png"
                alt=""
              />
            </div>
            <div>
              <p className={classes.mail}>techfusionclub@srmu.ac.in</p>
            </div>
            
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://cdn-icons-png.flaticon.com/512/2867/2867439.png"
                alt=""
              />
            </div>
            <div>
            <a href="https://drive.google.com/file/d/1joWLs_Xl9SN2XHaI10JuC9tbLu5xifst/view?usp=sharing" target="_blank" className={classes.mail}>Interested in Sponsorship ?</a>
            </div>
            
          </div>
          
        </div>
      </div>
      <div className={classes.footer_creator_div}>
        <h4 className={classes.footer_creator}>
          Website Developed by{" "}
          <a
            href={shrinjayurl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            Shrinjay Shresth
          </a>{" "}
          ,{" "}
          <a
            href={ksgurl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            {" "}
            Kushagra Chaturvedi
          </a>{" "}
          and{" "}
          <a
            href={sankalpurl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            {" "}
            Sankalp Jaiswal
          </a>{" "}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
