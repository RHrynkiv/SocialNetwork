import {UsersAPI} from "../API/API";

export type stateType = {
    users: Array<{ id: number, icon: any, followed: boolean, fullName: string, status: string, location: { country: string, city: string } }>
    usersCount: number,
    currentPage: number,
    isFetching: boolean,
    followProgress: boolean,
    followInProgress: Array<number>
}
const initialState = {
    users: [],
    usersCount: 0,
    currentPage: 1,
    isFetching: false,
    followProgress: false,
    followInProgress: []
}


const usersReducer = (state: stateType = initialState, action: any) => {
    switch (action.type) {
        case "CHANGE-FOLLOW": {
            let newArray = [...state.users]
            newArray = newArray.map((e) => {
                if (e.id === action.id) {
                    e.followed = !e.followed
                    return e
                }
                return e
            })
            let newState = {...state, users: [...newArray]}
            return newState
        }
        case 'SET-USERS': {
            let newState = {...state, users: [...action.users]}
            return newState
        }
        case 'SET-USERS-COUNT': {
            let newState = {...state, usersCount: action.usersCount}
            return newState
        }
        case 'SET-CURRENT-PAGE': {
            let newState = {...state, currentPage: action.NewValue}
            return newState
        }
        case 'TOGGLE-IS-FETCHING': {
            let newState = {...state, isFetching: action.isFetching}
            return newState
        }
        case 'FOLLOW-IN-PROGRESS': {
            return state.followProgress ? {
                ...state,
                followProgress: action.isFetching,
                followInProgress:state.followInProgress.filter(id => id !== action.userId)
            }: {
                ...state,
                followProgress: action.isFetching,
                followInProgress:  [...state.followInProgress, action.userId]
            }
        }
        default: {
            return state
        }
    }
}
export const ChangeFollowActionCreator = (id: number) => {
    return ({type: "CHANGE-FOLLOW", id: id})
}
export const setUsersActionCreator = (users: any) => {
    return ({type: 'SET-USERS', users: users})
}
export const setUsersCountActionCreator = (usersCount: number) => {
    return ({type: 'SET-USERS-COUNT', usersCount: usersCount})
}
export const setCurrentPageActionCreator = (NewValue: number) => {
    return ({type: 'SET-CURRENT-PAGE', NewValue: NewValue})
}
export const toggleIsFetchingActionCreator = (isFetching: boolean) => {
    return ({type: 'TOGGLE-IS-FETCHING', isFetching: isFetching})
}
export const toggleFollowInProgress = (isFetching: boolean, userId: number) => {
    return ({type: 'FOLLOW-IN-PROGRESS', isFetching: isFetching, userId: userId})
}
export const getUsers = (currentPage: number) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetchingActionCreator(true))
        UsersAPI.getUsers(currentPage).then((data: any) => {
            dispatch(toggleIsFetchingActionCreator(false))
            dispatch(setUsersActionCreator(data.items))
            dispatch(setUsersCountActionCreator(data.totalCount))
        })
    }
}
export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowInProgress(true, userId))
        UsersAPI.PostFollow(userId).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(ChangeFollowActionCreator(userId))
            }
            dispatch(toggleFollowInProgress(false, userId))
        })
    }
}
export const unFollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowInProgress(true, userId))
        UsersAPI.DeleteFollow(userId).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(ChangeFollowActionCreator(userId))
            }
            dispatch(toggleFollowInProgress(false, userId))
        })
    }
}
export default usersReducer