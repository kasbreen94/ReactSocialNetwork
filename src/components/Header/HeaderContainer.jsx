import React from "react";
import Header from "./Header";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth_Reducer";
import {connect} from "react-redux";
import {usersAPI} from "../../api/api";


class HeaderContainer extends React.Component {

    componentDidMount() {
        usersAPI.getUserAuth()
            .then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render () {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});


export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);