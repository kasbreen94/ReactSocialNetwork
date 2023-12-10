import React from 'react';
import dialogsStyle from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
    return (
        <div className={dialogsStyle.dialogs}>
            <DialogItem dialogs={props.dialogsPage.dialogs}/>
            <Message message={props.dialogsPage.messages}
                     addMessage={props.addMessage}/>
        </div>
    )
}

export default Dialogs;