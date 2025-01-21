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
    {
      name: "Dr. Veena Singh",
      course: "HoD & ASSOCIATE PROFESSOR",
      year: "IMCE & UNIVERSITY CLUB COORDINATOR",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQGzqTRu2zGEwQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1608385269429?e=1742428800&v=beta&t=W_yr0aIG3172JulJzx98wWrThC_g4ZEqEP4VyYHg2sw",
    },
  ];

  const facultyCon = [
    {
      name: "Er. Abhishek Kumar Saxena",
      course: "ASSISTANT PROFESSOR - DEEE",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGG-DMrNE5LWg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1669641758444?e=1742428800&v=beta&t=0C8-zUqYWU66fWwpGUZZcdpB6-wVvzu05Upp5vDhDqU",
      linkedin: "https://www.linkedin.com/in/abhishek-kumar-saxena-80a51111a/",
    },
    {
      name: "Dr. Mrityunjay Rai",
      course: "ASSISTANT PROFESSOR - DEEE",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHwYGPh-YvESQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686678021631?e=1742428800&v=beta&t=V_PYfqC9pjbRSKu3P64JqAIPh255RlT18M4zpz9r0Yg",
      linkedin: "https://www.linkedin.com/in/dr-mritunjay-rai-36b85118/",
    },
    {
      name: "Er. Sunny Kumar",
      course: "ASSISTANT PROFESSOR - DCSE",
      image:
        "https://srmu.ac.in/storage/teams/11zon-cropped-5-11zon-23022411165423.jpeg",
      linkedin: "https://www.linkedin.com/in/sunny-kumar-a7910b234/",
    },
    {
      name: "Er. Neeta Bhusal Sharma",
      course: "ASSISTANT PROFESSOR - DCSE",
      image:
        "https://srmu.ac.in/storage/teams/11zon-cropped-2-11zon-23022410512735.jpeg",
      linkedin: "https://www.linkedin.com/in/neeta-bhusal-13708037/",
    },
  ];

  const veteran = [
    { name: "Deepika", course: "M.TECH", year: "2ND YEAR", image: Deepika, linkedin: "https://www.linkedin.com/in/deepika-singh-070957230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Aadya Sharma", course: "BBA.LLB (HONS)", year: "5TH YEAR", image: Aadya, linkedin: "https://www.linkedin.com/in/aadya-sharma-130a27218/" },
    { name: "Atam Prakash Bajpai", course: "B.TECH (ECE)", year: "4TH YEAR", image: Atam, linkedin: "https://www.linkedin.com/in/atam-prakash-bajpai-67441a224/" },
    { name: "Ayushman Singh", course: "B.TECH (ECE)", year: "4TH YEAR", image: Ayushman, linkedin: "https://www.linkedin.com/in/ayushman-singh-413240195" },
    
  ];

  const studentCon = [
    {
      name: "Kesar Rai",
      course: "B.TECH CSE (DS+AI)",
      year: "3RD YEAR",
      image: Kesar,
      linkedin: "https://www.linkedin.com/in/kesarrai/",
    },
    {
      name: "Pranshu Agrahari",
      course: "B.TECH CSE (DS+AI)",
      year: "3RD YEAR",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQH5OKNHCbc-bA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692424678861?e=1742428800&v=beta&t=KKuEjL5zok6Sd-_5QoDfGDKvPUtjwHst6DKJDUQ8Kxw",
      linkedin: "",
    },
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
    { name: "Shrinjay Shresth", course: "B.TECH CSE ", image: Shrinjay, linkedin: "https://www.linkedin.com/in/shrinjay-shresth-036010215/" },
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
      <div className={classes.ocSec} style={{ textAlign: "center" }}>
        <h2 className={classes.heading}>Fest Incharge</h2>
        {renderCarousel(festIn)}
      </div>

      <div className={classes.ocSec} style={{ textAlign: "center" }}>
        <h2 className={classes.heading}>Faculty Convener</h2>
        {renderCarousel(facultyCon)}
      </div>

      <div className={classes.ocSec} style={{ textAlign: "center" }}>
        <h2 className={classes.heading}>Veteran Conveners</h2>
        {renderCarousel(veteran)}
      </div>

      <div className={classes.ocSec} style={{ textAlign: "center" }}>
        <h2 className={classes.heading}>Student Conveners</h2>
        {renderCarousel(studentCon)}
      </div>

      <div className={classes.ocSec} style={{ textAlign: "center" }}>
        <h2 className={classes.heading}>Student Co-Conveners</h2>
        {renderCarousel(studentCoCon)}
      </div>

      <div className={classes.ocSec} style={{ textAlign: "center" }}>
        <h2 className={classes.heading}>WebOps Team</h2>
        {renderCarousel(webOps)}
      </div>
    </section>
  );
};

export default Organizers;
