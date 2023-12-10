import {useParams} from "react-router-dom";
import React from "react";

export const withRouter = (Children) => (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
}
