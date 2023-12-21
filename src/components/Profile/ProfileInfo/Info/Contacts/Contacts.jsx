import s from "../../ProfileInfo.module.css";
import React, {useState} from "react";
import {ContactsForm} from "./ContactsForm";


const Contacts = (props) => {

    return (
        <div className={s.contacts}>
                <div>
                    {Object.entries(props.contacts).filter(([c, v]) => c && v !== null).map(([key, value]) =>
                        <div key={key.id}>
                            <a href={value}>{key}</a>
                        </div>)}
                </div>
        </div>
    )
}

export default Contacts;