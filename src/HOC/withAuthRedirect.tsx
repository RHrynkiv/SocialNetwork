import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapToPropsForRedirect = (state: any) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component: any) => {
    let RedirectComponent=(props:any)=>{
        if(!props.isAuth){
            return <Redirect to='/login'/>
        }
        return <Component {...props}/>
    }
    return connect(mapToPropsForRedirect)(RedirectComponent)
}
export default withAuthRedirect;