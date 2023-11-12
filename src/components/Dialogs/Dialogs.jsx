import React from 'react';
import dialogsStyle from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {

    let messagesElements =
        props.messages.map( message => <Message message={message.message}/>);

    let dialogsElements =
        props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );

    return (
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogsStyle.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;