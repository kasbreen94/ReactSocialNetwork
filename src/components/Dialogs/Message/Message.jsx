import React from 'react';
import dialogsStyle from './../Dialogs.module.css'

const Message = (props) => {
    return <div className={dialogsStyle.message}>{props.message}</div>
}
export default Message;