import React, {FC} from 'react';
import avatar from '../../../assets/images/avatar.svg'
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/dialogsReducer";

type PropsTypes = {
    dialogs: DialogType[]
}

const DialogItem: FC<PropsTypes> = (props) => {
    return (
        <div>
        <div className={s.dialogsItems}>
            {props.dialogs.map(d =>
                <div className={s.dialog} key={d.id}>
                    <img src={d.avatar || avatar} alt=""/>
                    <NavLink to={"/dialogs/" + d.id}
                             className={({isActive}) => isActive ? s.active : s.dialog}>{d.name}</NavLink>
                </div>)}
        </div>
        </div>
    )
}
export default DialogItem;