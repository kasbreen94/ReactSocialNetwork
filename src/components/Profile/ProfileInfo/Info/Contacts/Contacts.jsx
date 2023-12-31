import s from "../../ProfileInfo.module.css";
import React from "react";


const Contacts = (props) => {

    return (
        <div className={s.contacts}>
                <div>
                    {Object.entries(props.contacts).filter(([c, v]) => c && v !== null && c && v !== "").map(([key, value]) =>
                        <div key={value.id} >
                            {key} :
                            <a href={value}>{value}</a>
                        </div>)}
                </div>
        </div>
    )
}

export default Contacts;