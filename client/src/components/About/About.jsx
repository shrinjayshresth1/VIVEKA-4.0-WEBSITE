// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "./about.svg";

const About = () => {
  return (
    <>
      <section id="about" className={classes.aboutSec}>
        <div className={classes.about}>
          <div className={classes.details}>
            <h3 className={classes.heading}>About</h3>
            <h2 className={classes.heading1}>Viveka 4.0</h2>
            <p className={classes.para}>
              <strong>
                Viveka 4.0: <i>The Intelligence</i>
              </strong>{" "}
              is the Annual Techfest of Shri Ramswaroop Memorial University
              organized under the initiative of Tech Fusion Club. Unleash your
              technical skills in the vast horizon of events.
            </p>

            <p className={classes.para}>
              <strong>
                Viveka 4.0 
              </strong>{" "}
              promises a thrilling experience for all tech enthusiasts. We are
              writing to you with the hope that your esteemed organization will
              consider sponsoring our event.
            </p>

            {/* <p className={classes.para}>
            Spectacular talent stretches boundaries to inspire the participating
            students and the rapt audience alike. A gigantic range of events
            from advanced robotics challenges to entrepreneurship hunts
            promising to zap up the cranial indices of participants. Skill,
            genius and knowledge trading infused with a handful of fun, and a
            titanic prize money sum of above half a million rupees to make Karma
            one of the most unique tech carnivals of the country.
          </p> */}
            {/* <div className={classes.btn}>
            <Button label="Explore" />
          </div> */}
          </div>

          <div className={classes.composition}>
            <img className={classes.images} src={about} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
