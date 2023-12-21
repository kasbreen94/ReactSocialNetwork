import s from "../../ProfileInfo.module.css";
import React, {useEffect, useState} from "react";
import {MainInfoEditForm} from "./MainInfoEditForm";

const DescriptionInfo = (props) => {

    return (
        <div className={s.descriptionInfo}>
                    <div className={s.descriptionItem}>
                        <span>Name:</span>
                        {props.fullName}
                    </div>
                    <div className={s.descriptionItem}>
                        <span>Looking for a job:</span>
                        {props.lookingForAJob === true ? 'Ищу работу' : 'Не ищу работу'}
                    </div>
                    <div className={s.descriptionItem}>
                        <span>My professional skills:</span>
                        {props.lookingForAJobDescription}
                    </div>
        </div>
    )
}

export default DescriptionInfo;