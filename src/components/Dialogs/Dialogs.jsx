import React from 'react';
import dialogsStyle from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    let messagesElements =
        props.dialogsPage.messages.map( message => <Message
            message={message.message}
        />);

    let dialogsElements =
        props.dialogsPage.dialogs.map( dialog =>
            <DialogItem
                name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
     );


    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
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
                        <textarea
                            ref={newMessageElement}
                            onChange={onMessageChange}
                            value={props.dialogsPage.newMessageText}
                        />
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;