import React from "react";
import ProfileInfoStyle from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className={ProfileInfoStyle.status}>
                <span>Status:</span>
                <span >
                    {this.state.editMode !== true
                        ?
                        <span className={ProfileInfoStyle.statusEdit}
                              onClick={this.activateEditMode}>{this.props.status || "No status"}</span>

                        :
                        <input className={ProfileInfoStyle.statusInput}
                               onChange={this.onStatusChange}
                               autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    }
                </span>
            </div>
        )
    }
}

export default ProfileStatus;