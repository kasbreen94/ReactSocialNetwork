import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {useParams} from 'react-router-dom';
import {usersAPI} from "../../api/api";

export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        usersAPI.getUserProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    componentDidUpdate(prevProps) {
        let userId = this.props.match.params.userId
        if (prevProps.match.params.userId !== userId) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                .then(response => {
                    this.props.setUserProfile(response.data);
                });
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));