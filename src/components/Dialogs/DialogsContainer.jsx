import {addMessage} from "../../redux/dialogsReducer.ts";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";

class dialogsContainer extends React.Component {
    render() {
        return (
            <Dialogs
                dialogsPage={this.props.dialogsPage}
                addMessage={this.props.addMessage}
                // isAuth={this.props.isAuth}
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
    connect(mapStateToProps, {addMessage})(dialogsContainer);

export default DialogsContainer;