import React from 'react';
import dialogsStyle from './../Dialogs.module.css'
import AddMessageForm from "./AddMessageForm";


const Message = (props) => {

    let addNewMessage = (values) => {
        props.addMessage(values.newMessage)
    }

    return <div className={dialogsStyle.messages}>
        <div className={dialogsStyle.message}>
            {props.message.map(m =>
                <div>{m.message}</div>
            )}
        </div>
        <div className={dialogsStyle.addMessage}>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    </div>
}

export default Message;