import {profileAPI, UsersAPI} from "../API/API";

type StateType = {
    Posts: Array<{ text: string }>
    NewPostText: string
};

const ADD_POST = 'ADD-POST';
const ON_CHANGE = 'ON-CHANGE';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState={
    Posts: [{text: "Hello!"}, {text: "YO YO YO!"}],
    NewPostText: '',
    profile: null,
    status: 'No status',
    };

const profileReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST: {
            let Obj = {text: state.NewPostText};
            let stateCopy = {...state};
            stateCopy.Posts.push(Obj);
            stateCopy.NewPostText = '';

            return stateCopy;
        }
        case ON_CHANGE : {
            let stateCopy = {...state}
            stateCopy.NewPostText = action.text;
            return stateCopy;
        }
        case SET_USERS_PROFILE: {
            let newState={...state, profile: action.profile}
            return newState
        }
        case SET_STATUS: {
            let newState={...state, status: action.status?action.status:"----"}
            return newState
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const onChangeActionCreator = (NewText: string) => {
    return {type: ON_CHANGE,text: NewText}
}
export const setUsersProfileActionCreator = (profile:any) => {
    return {type: SET_USERS_PROFILE, profile}
}
export const setStatus = (status: string) => {
    return({type: SET_STATUS, status})
}

export const getUser = (userId: number) => {
    return (dispatch: any) => UsersAPI.getUser(userId).then(response => dispatch(setUsersProfileActionCreator(response)))
}
export const getStatus = (userId: number) => {
    return (dispatch: any) => profileAPI.getStatus(userId).then(response=> {
        debugger
        dispatch(setStatus(response))
    })
}
export const updateStatus = (status: string) =>{
    return (dispatch: any) => profileAPI.updateStatus(status)
        .then(response => {
            debugger
            if (response.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;