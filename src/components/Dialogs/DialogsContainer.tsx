import {actions, DialogType, MessageType} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import React, {FC} from "react";
import dialogsStyle from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {AppStateType} from "../../redux/redux_store";

type MapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

type MapDispatchToPropsType = {
    addMessage: (newMessage: string) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const dialogsContainer: FC<PropsType> = (props) => {
    return (
        <div className={dialogsStyle.dialogs}>
            <DialogItem dialogs={props.dialogs}/>
            <Message messages={props.messages}
                     addMessage={props.addMessage}/>
        </div>
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

export default connect(mapStateToProps, {addMessage : actions.addMessage})(dialogsContainer);
