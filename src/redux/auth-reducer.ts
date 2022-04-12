import {UsersAPI} from "../API/API";

type StateType = {};

const SET_USER_DATA = "SET_USER_DATA"
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false};

const authReducer = (state: StateType = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        }
        default:
            return state;
    }
}
export const setAuthUserData = (userId: string, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login
    }
})
export const getAuth = () => {
    return (dispatch: any) => {
        UsersAPI.getAuth()
            .then((response:any) =>{
                if(response.resultCode === 0) {
                    let {id,email,login} = response.data;
                    dispatch(setAuthUserData(id,email,login))
                }
    })
}
}
export default authReducer;