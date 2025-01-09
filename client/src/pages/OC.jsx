import React from 'react'
import classes from "./OC.module.css";
import Organizers from '../components/Organizers/Organizers';

const OC = () => {
    return (
    <>
        <div className={classes.container}>
            <h1 className={classes.heading}>Organizing Committee</h1>
            <Organizers />
        </div>
    </>
    )
}

export default OC