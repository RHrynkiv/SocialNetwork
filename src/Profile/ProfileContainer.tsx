import React from "react";
import {
    addPostActionCreator, getStatus,
    getUser,
    onChangeActionCreator, updateStatus
} from "../redux/profilereducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainerClass extends React.Component<any>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 23386
        }
        this.props.getUser(userId)
        this.props.getStatus(userId);
    }
    render(){
        return(
            <Profile {...this.props}/>
        )
    }
}
const mapStateToProps = (state: any) => {
    return ({
        NewPostText: state.profilePage.NewPostText,
        Posts: state.profilePage.Posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    })
}
const mapDispatchToProps = (dispatch: any) => {
    return ({
        OnChange: (NewText: string) => {
            dispatch(onChangeActionCreator(NewText))
        },
        AddPost: () =>{
            dispatch(addPostActionCreator());
        },
        getUser: (userId: number) =>{
            const Thunk = getUser(userId)
            dispatch(Thunk)
        },
        getStatus: (userId: number) =>{
            const Thunk = getStatus(userId)
            dispatch(Thunk)
        },
        updateStatus: (status: string) =>{
            const Thunk = updateStatus(status)
            dispatch(Thunk)
        }
    })
}

let ProfileContainer = withRouter(ProfileContainerClass)
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(ProfileContainer);