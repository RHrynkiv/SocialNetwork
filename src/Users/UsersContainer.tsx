import {connect} from "react-redux";
import Users from "./Users";
import {
    ChangeFollowActionCreator, follow, getUsers,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    setUsersCountActionCreator, toggleFollowInProgress, toggleIsFetchingActionCreator, unFollow
} from "../redux/usersreducer";
import React from "react";
import Preloader from "../common/preloader";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {compose} from "redux";

type PropsType = {
    users: Array<{ id: number, photos: any, followed: boolean, name: string, status: string, location: { country: string, city: string } }>
    currentPage: number
    usersCount: number
    isFetching: boolean
    followProgress: boolean
    followInProgress: Array<number>
    changeFollow: (id: number) => void
    setUsers: (users: any) => void
    setUsersCount: (usersCount: number) => void
    setCurrentPage: (NewValue: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    getUsers: (currentPage: number) => void
    follow: (UserId: number) => void
    unFollow: (UserId: number) => void
    toggleFollowInProgress: (isFetching: boolean, userId: number) => void
}
class UsersContainerAPI extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage)
    }

    setCurrentPage = (NewValue: number) => {
        this.props.setCurrentPage(NewValue)
        this.props.getUsers(NewValue)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : ''}

            <Users usersCount={this.props.usersCount}
                   users={this.props.users}
                   changeFollow={this.props.changeFollow}
                   setUsers={this.props.setUsers}
                   setUsersCount={this.props.setUsersCount}
                   setCurrentPage={this.setCurrentPage}
                   currentPage={this.props.currentPage}
                   toggleIsFetching={this.props.toggleIsFetching}
                   followProgress={this.props.followProgress}
                   toggleFollowInProgress={this.props.toggleFollowInProgress}
                   followInProgress={this.props.followInProgress}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}/>
        </>

    }
}

const stateToProps = (state: any) => {
    return ({
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followProgress: state.usersPage.followProgress,
        followInProgress: state.usersPage.followInProgress
    })
}
const dispatchToProps = (dispatch: any) => {
    return ({
        changeFollow: (id: number) => {
            dispatch(ChangeFollowActionCreator(id))
        },
        setUsers: (users: any) => {
            dispatch(setUsersActionCreator(users))
        },
        setUsersCount: (usersCount: number) => {
            dispatch(setUsersCountActionCreator(usersCount))
        },
        setCurrentPage: (NewValue: number) => {
            dispatch(setCurrentPageActionCreator(NewValue))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingActionCreator(isFetching))
        },
        toggleFollowInProgress: (isFetching: boolean, userId: number) => {
            dispatch(toggleFollowInProgress(isFetching, userId))
        },
        getUsers: (currentPage: number) => {
            const Thunk = getUsers(currentPage);
            dispatch(Thunk)
        },
        follow: (UserId: number) => {
            const Thunk = follow(UserId);
            dispatch(Thunk)
        },
        unFollow: (UserId: number) => {
            const Thunk = unFollow(UserId);
            dispatch(Thunk)
        }
    })
}

export default compose(
    connect(stateToProps, dispatchToProps),
    withAuthRedirect
)(UsersContainerAPI);