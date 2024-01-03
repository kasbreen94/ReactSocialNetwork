import React, {FC} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux_store";

let mapStateToPropsForNavigate = (state: AppStateType) => ({
        isAuth: state.auth.isAuth
})

type MapPropsType =  ReturnType<typeof mapStateToPropsForNavigate>

export function withAuthNavigate<WCP extends object> (Component: React.ComponentType<WCP>) {
    function NavigateComponent(props: MapPropsType) {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Navigate to= {'/login'} />


        return <Component {...restProps as WCP}/>
    }

    let ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(NavigateComponent)

    return ConnectedAuthNavigateComponent;
}