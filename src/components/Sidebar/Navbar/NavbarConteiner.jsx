import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        navbar: state.sidebar.navbar

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        // activeLink: () => {
        //     const activeLink = ({isActive}) =>
        //         isActive ? NavbarStyle.active : NavbarStyle.item
        //     activeLink();
        // }
        }
}

const NavbarContainer =
    connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;