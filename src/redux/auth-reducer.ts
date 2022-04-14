import {authAPI, UsersAPI} from "../API/API";
import {Dispatch} from "redux";

type StateType = {};

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}

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
        case 'login/SET-IS-LOGGED-IN': {
            return {...state, isAuth: action.value}
        }
        default:
            return state;
    }
}
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)
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
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setIsLoggedInAC(true))
            }
        })

}
export default authReducer;