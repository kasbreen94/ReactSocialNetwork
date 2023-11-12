import React from 'react';
import dialogsStyle from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    const activeLink = ({isActive}) => isActive ? dialogsStyle.active : dialogsStyle.dialog

    return <div className={dialogsStyle.dialog}>
        <NavLink to={"/dialogs/" + props.id} className={activeLink}>{props.name}</NavLink>
    </div>
}
export default DialogItem;