import React from 'react';
import dialogsStyle from './../Dialogs.module.css'


const Message = (props) => {


    return <div className={dialogsStyle.messages}>
        <div className={dialogsStyle.message}>
            {props.message.map(m =>
                <div>{m.message}</div>
            )}
        </div>
        <div className={dialogsStyle.addMessage}>
            <div>
                <textarea
                    placeholder='Enter your message'
                    onChange={props.updateNewMessageText}
                    value={props.newMessageText}
                />
            </div>
            <div>
                <button onClick={props.addMessage}>Send</button>
            </div>
        </div>
    </div>
}
export default Message;