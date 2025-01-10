import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from "./Organizers.module.css";

import Atam from "../../assets/OC/Atam.jpg";
import Ayushman from "../../assets/OC/Ayushman.jpg";
import Deepika from "../../assets/OC/Deepika.jpg";
import Kushagra from "../../assets/OC/KUSHAGRA.jpg";
import Nandini from "../../assets/OC/Nandini.jpg";
import Nitin from "../../assets/OC/Nitin.jpg";
import Pragya from "../../assets/OC/pragya.jpeg";
import Sankalp from "../../assets/OC/Sankalp.jpg";
import Shrinjay from "../../assets/OC/SHRINJAY.jpg";
import Aadi from "../../assets/OC/Aadi.jpg";
import Kesar from "../../assets/OC/Kesar.jpg"
import Aadya from "../../assets/OC/Aadya.jpg"

const Organizers = () => {
  const festIn = [
    { name: "Dr. Veena Singh", course: "HoD & ASSOCIATE PROFESSOR", year: "IMCE & UNIVERSITY CLUB COORDINATOR", image: "" },
  ];

  const facultyCon = [
    { name: "Er. Abhishek Kumar Saxena", course: "ASSISTANT PROFESSOR - DEEE", image: "", linkedin:"" },
    { name: "Dr. Mrityunjay Rai", course: "ASSISTANT PROFESSOR - DEEE", image: "" , linkedin:""},
    { name: "Er. Sunny Kumar", course: "ASSISTANT PROFESSOR - DCSE", image: "", linkedin:"" },
    { name: "Er. Neeta Bhusal Sharma", course: "ASSISTANT PROFESSOR - DCSE", image: "", linkedin:"" },
  ];

  const veteran = [
    { name: "Aadya Sharma", course: "BBA.LLB (HONS)", year: "5TH YEAR", image: Aadya, linkedin: "https://www.linkedin.com/in/aadya-sharma-130a27218/" },
    { name: "Atam Prakash Bajpai", course: "B.TECH (ECE)", year: "5TH YEAR", image: Atam, linkedin: "https://www.linkedin.com/in/atam-prakash-bajpai-67441a224/" },
    { name: "Ayushman Singh", course: "B.TECH (ECE)", year: "5TH YEAR", image: Ayushman, linkedin: "https://www.linkedin.com/in/ayushman-singh-413240195" },
    { name: "Deepika", course: "M.TECH", year: "5TH YEAR", image: Deepika, linkedin: "https://www.linkedin.com/in/deepika-singh-070957230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];

  const studentCon = [
    { name: "Kesar Rai", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: Kesar , linkedin: "https://www.linkedin.com/in/kesarrai/" },
    { name: "Pranshu Agrahari", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: "", linkedin: "https://www.linkedin.com/in/pranshu-agrahari-956a37288/" },
  ];

  const studentCoCon = [
    { name: "Shrinjay Shresth", course: "B.TECH CSE", year: "3RD YEAR", image: Shrinjay, linkedin: "https://www.linkedin.com/in/shrinjay-shresth-036010215/" },
    { name: "Aadi Chandra", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: Aadi, linkedin: "https://www.linkedin.com/in/aadi-chandra-7a4185278/" },
    { name: "Nitin Jaiswal", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: Nitin, linkedin: "https://www.linkedin.com/in/nitin-jaiswal-6b41a024b/" },
    { name: "Nandini Verma", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: Nandini, linkedin: "https://www.linkedin.com/in/nandini-verma-4n5v4/" },
    { name: "Pragya Sharma", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: Pragya, linkedin: "https://www.linkedin.com/in/pragya-sharma-136280280" },
  ];

  const webOps = [
    { name: "Sankalp Jaiswal", course: "B.TECH CSE (DS+AI)", image: Sankalp, linkedin: "https://www.linkedin.com/in/sankalp-jaiswal-413404257/" },
    { name: "Kushagra Chaturvedi", course: "B.TECH CSE (DS+AI)", image: Kushagra, linkedin: "https://www.linkedin.com/in/kushagra-chaturvedi" },
    { name: "Shrinjay Shresth", course: "B.TECH CSE (DS+AI)", image: Shrinjay, linkedin: "https://www.linkedin.com/in/shrinjay-shresth-036010215/" },
  ];

  const renderCarousel = (data) => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((member, index) => (
          <SwiperSlide key={index}>
            <div className={classes.card}>
              <img className={classes.cardImage} src={member.image} alt={member.name} />
              <h3 className={classes.cardName}>{member.name}</h3>
              <p className={classes.cardCourse}>{member.course}</p>
              {member.year && <p className={classes.cardCourse}>{member.year}</p>}
              
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={classes.linkedinLink}>
                  <i className="fab fa-linkedin"></i> 
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <section id="organizers" className="ocContainer">
      <div className={classes.ocSec}>
        <h2 className={classes.heading}>Fest Incharge</h2>
        {renderCarousel(festIn)}
      </div>

      <div className={classes.ocSec}>
        <h2 className={classes.heading}>Faculty Convener</h2>
        {renderCarousel(facultyCon)}
      </div>

      <div className={classes.ocSec}>
        <h2 className={classes.heading}>Veteran Conveners</h2>
        {renderCarousel(veteran)}
      </div>

      <div className={classes.ocSec}>
        <h2 className={classes.heading}>Student Conveners</h2>
        {renderCarousel(studentCon)}
      </div>

      <div className={classes.ocSec}>
        <h2 className={classes.heading}>Student Co-Conveners</h2>
        {renderCarousel(studentCoCon)}
      </div>

      <div className={classes.ocSec}>
        <h2 className={classes.heading}>WebOps Team</h2>
        {renderCarousel(webOps)}
      </div>
    </section>
  );
};

export default Organizers;
