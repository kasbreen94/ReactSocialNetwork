import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import React from "react";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

class SidebarContainer extends React.Component {

    render() {

        return <>
            <Sidebar
                navbar={this.props.navbar}
                friends={this.props.friends}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        navbar: state.sidebar.navbar,
        friends: state.sidebar.friends,
    }
}

export default compose (
    connect(mapStateToProps),
    // withAuthNavigate
) (SidebarContainer);

