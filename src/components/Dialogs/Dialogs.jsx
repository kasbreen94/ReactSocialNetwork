import React from 'react';
import dialogsStyle from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {

    let messagesElements =
        props.dialogs.messages.map( message => <Message message={message.message}/>);

    let dialogsElements =
        props.dialogs.dialogs.map( dialog => <DialogItem
            name={dialog.name} id={dialog.id} avatar={dialog.avatar}/> );

    let newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }


    return (
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogsStyle.messages}>
                {messagesElements}
                <div className={dialogsStyle.addMessage}>
                    <div>
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;