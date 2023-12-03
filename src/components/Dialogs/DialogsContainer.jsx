import {addMessage, updateNewMessageText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";

class dialogsContainer extends React.Component {
    render() {
        return (
            <Dialogs
                dialogsPage={this.props.dialogsPage}
                updateNewMessageText={this.props.updateNewMessageText}
                addMessage={this.props.addMessage}
                isAuth={this.props.isAuth}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const DialogsContainer =
    connect(mapStateToProps, {updateNewMessageText, addMessage})(dialogsContainer);

export default DialogsContainer;