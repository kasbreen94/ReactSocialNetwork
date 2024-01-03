import React, {FC} from 'react';
import s from './../Dialogs.module.css'
import {AddMessageForm} from "./AddMessageForm";
import {MessageType} from "../../../redux/dialogsReducer";

type PropsTypes = {
    messages: MessageType[]
    addMessage: (newMessage: string) => void
}

const Message: FC<PropsTypes> = (props) => {

    return <div className={s.messages}>
        <div className={s.message}>
            {props.messages.map(m =>
                <div key={m.id}>{m.message}</div>
            )}
        </div>
        <div className={s.addMessage}>
            <AddMessageForm addMessage={props.addMessage}/>
        </div>
    </div>
}

export default Message;