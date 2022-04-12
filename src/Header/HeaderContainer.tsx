import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, setAuthUserData} from "../redux/auth-reducer";

class HeaderContainer extends React.Component<any, any>{
    componentDidMount() {
        this.props.getAuth()
    }
    render(){
    return <Header {...this.props}/>}
}
const mapStateToProps = (state:any)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
const mapDispatchToProps = (dispatch: any) =>({
    getAuth: () => {
        const Thunk = getAuth();
        dispatch(Thunk)
    }
})
export default connect(mapStateToProps, mapDispatchToProps) (HeaderContainer);