import { authAPI } from "../api/api";


//Action=================================================
const loginUser = (dataProfile)=>{
    return {
        type:"login_user", 
        dataProfile
    }
}
const changeAuthFetching = (status)=>{
    return {
        type: "changeAuthFetching",
        status
    }
}
//=================================================
export const getLogin = ()=>{
    return (dispatch)=>{
        dispatch(changeAuthFetching(true));
        authAPI.getLogin().then(data=>{
            dispatch(changeAuthFetching(false));
            dispatch(loginUser(data));
        });
    }
}


//Начальный state===================================
let initialState = {
    isAuth: false,
    authFetching: false,
    dataProfile: null
}
//===================================================

const authReducer = function(state = initialState, action){
    switch(action.type){
        case "login_user":
            return {
                ...state,
                dataProfile: action.dataProfile,
                isAuth: action.dataProfile.resultCode==0?true:false
            }
        case "changeAuthFetching":
            return {
                ...state,
                authFetching: action.status
            }
        default:
            return state;
    }
}

export default authReducer;