import React, { useEffect, useRef } from 'react'
import classes from './Organizers.module.css'

const Organizers = () => {

    const festIn = [
        { name: 'Dr. Veena Singh', course: "HoD & ASSOCIATE PROFESSOR", year: 'IMCE & UNIVERSITY CLUB COORDINATOR', image: '/logo.png' },
    ]

    const facultyCon = [
        { name: 'Er. Abhishek Kumar Saxena', course: "ASSISTANT PROFESSOR - DEEE", image: '/logo.png' },
        { name: 'Dr. Mrityunjay Rai', course: "ASSISTANT PROFESSOR - DEEE", image: '/logo.png' },
        { name: 'Er. Sunny Kumar', course: "ASSISTANT PROFESSOR - DCSE", image: '/logo.png' },
        { name: 'Er. Neeta Bhusal Sharma', course: "ASSISTANT PROFESSOR - DCSE", image: '/logo.png' },
    ]

    const veteran = [
        { name: "Aadya Sharma", course: "BBA.LLB (HONS)", year: "5TH YEAR", image: '/logo.png' },
        { name: "Atam Prakash Bajpai", course: "B.TECH (ECE)", year: "5TH YEAR", image: '/logo.png' },
        { name: "Ayushman Singh", course: "B.TECH (ECE)", year: "5TH YEAR", image: '/logo.png'},
        { name: "Deepika", course: "M.TECH", year: "5TH YEAR", image: '/logo.png' },
    ]

    const studentCon = [
        { name: "Kesar Rai", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: '/logo.png'},
        { name: "Pranshu Agrahari", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: '/logo.png'},
    ]

    const studentCoCon = [
        { name: "Shrinjay Shresth", course: "B.TECH CSE", year: "3RD YEAR", image: '/logo.png' },
        { name: "Aadi Chandra", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: '/logo.png' },
        { name: "Nitin Jaiswal", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: '/logo.png' },
        { name: "Nandini Verma", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: '/logo.png' },
        { name: "Pragya Sharma", course: "B.TECH CSE (DS+AI)", year: "3RD YEAR", image: '/logo.png' },
    ]

    const webOps = [
        { name: "Sankalp Jaiswal", course: "B.TECH CSE (DS+AI)", image: '/logo.png'},
        { name: "Kushagra Chaturvedi", course: "B.TECH CSE (DS+AI)", image: '/logo.png' },
        { name: "Shrinjay Shresth", course: "B.TECH CSE (DS+AI)", image: '/logo.png' },
    ]

    const cardContainerRefs = useRef([]);

    return (
        <section id="organizers" className='ocContainer'>

            <div className={classes.ocSec}>
                <h2 className={classes.heading}>Fest Incharge</h2>
                <div className={classes.cardcontainer} ref={(el) => (cardContainerRefs.current[0] = el)}>
                    {festIn.map((member, index) => (
                        <div key={index} className={classes.card}>
                            <img className={classes.cardImage} src={member.image} alt={member.name} />
                            <h3 className={classes.cardName}>{member.name}</h3>
                            <p className={classes.cardCourse}>{member.course}</p>
                            <p className={classes.cardCourse}>{member.year}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={classes.ocSec}>
                <h2 className={classes.heading}>Faculty Convener</h2>
                <div className={classes.cardcontainer} ref={(el) => (cardContainerRefs.current[0] = el)}>
                    {facultyCon.map((member, index) => (
                        <div key={index} className={classes.card}>
                            <img className={classes.cardImage} src={member.image} alt={member.name} />
                            <h3 className={classes.cardName}>{member.name}</h3>
                            <p className={classes.cardCourse}>{member.course}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={classes.ocSec}>
                <h2 className={classes.heading}>Veteran Conveners</h2>
                <div className={classes.cardcontainer} ref={(el) => (cardContainerRefs.current[0] = el)}>
                    {veteran.map((member, index) => (
                        <div key={index} className={classes.card}>
                            <img className={classes.cardImage} src={member.image} alt={member.name} />
                            <h3 className={classes.cardName}>{member.name}</h3>
                            <p className={classes.cardCourse}>{member.course}</p>
                            <p className={classes.cardCourse}>{member.year}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={classes.ocSec}>
                <h2 className={classes.heading}>Student Conveners</h2>
                <div className={classes.cardcontainer} ref={(el) => (cardContainerRefs.current[1] = el)}>
                    {studentCon.map((member, index) => (
                        <div key={index} className={classes.card}>
                            <img className={classes.cardImage} src={member.image} alt={member.name} />
                            <h3 className={classes.cardName}>{member.name}</h3>
                            <p className={classes.cardCourse}>{member.course}</p>
                            <p className={classes.cardCourse}>{member.year}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={classes.ocSec}>
                <h2 className={classes.heading}>Student Co-Conveners</h2>
                <div className={classes.cardcontainer} ref={(el) => (cardContainerRefs.current[2] = el)}>
                    {studentCoCon.map((member, index) => (
                        <div key={index} className={classes.card}>
                            <img className={classes.cardImage} src={member.image} alt={member.name} />
                            <h3 className={classes.cardName}>{member.name}</h3>
                            <p className={classes.cardCourse}>{member.course}</p>
                            <p className={classes.cardCourse}>{member.year}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={classes.ocSec}>
                <h2 className={classes.heading}>WebOps Team</h2>
                <div className={classes.cardcontainer} ref={(el) => (cardContainerRefs.current[2] = el)}>
                    {webOps.map((member, index) => (
                        <div key={index} className={classes.card}>
                            <img className={classes.cardImage} src={member.image} alt={member.name} />
                            <h3 className={classes.cardName}>{member.name}</h3>
                            <p className={classes.cardCourse}>{member.course}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Organizers