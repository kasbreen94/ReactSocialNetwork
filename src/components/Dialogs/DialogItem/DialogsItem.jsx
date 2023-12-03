import React from 'react';
import dialogsStyle from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    return (
        <div>
        <div className={dialogsStyle.dialogsItems}>
            {props.dialogs.map(d =>
                <div className={dialogsStyle.dialog}>
                    <img src={d.avatar} alt=""/>
                    <NavLink to={"/dialogs/" + d.id}
                             className={({isActive}) => isActive ? dialogsStyle.active : dialogsStyle.dialog}>{d.name}</NavLink>
                </div>)}
        </div>
        </div>
    )
}
export default DialogItem;