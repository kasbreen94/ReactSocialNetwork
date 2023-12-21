import s from "../ProfileInfo.module.css";
import React from "react";


const AboutMe = (props) => {
    return (
        <div className={s.aboutMe}>
            {props.aboutMe}
        </div>
    )
}

export default AboutMe;