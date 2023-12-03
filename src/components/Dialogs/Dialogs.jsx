import React from 'react';
import dialogsStyle from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={dialogsStyle.dialogs}>
            <DialogItem dialogs={props.dialogsPage.dialogs}/>
            <Message message={props.dialogsPage.messages}
                     newMessageText={props.dialogsPage.newMessageText}
                     updateNewMessageText={props.updateNewMessageText}
                     addMessage={props.addMessage}/>
        </div>
    )
}

export default Dialogs;