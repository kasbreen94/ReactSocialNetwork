import React from 'react';
import dialogsStyle from './../Dialogs.module.css'


const Message = (props) => {


    return <div>
        <div className={dialogsStyle.message}>
            {props.message}

        </div>
    </div>
}
export default Message;