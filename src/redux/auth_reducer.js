import { authAPI } from "../api/api";

//Action=================================================
const setUser = (dataProfile)=>{
    return {
        type:"setUser", 
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
            dispatch(setUser(data));
        });
    }
}
export const postLogin = (login,password,rememberMe)=>{
    return (dispatch)=>{
        dispatch(changeAuthFetching(true));
        authAPI.postLogin(login,password,rememberMe).then(data=>{
            if (data.data.resultCode===0) dispatch(getLogin());
            else dispatch(changeAuthFetching(false));
        });
    }
}
export const logout = ()=>{
    return (dispatch)=>{
        dispatch(changeAuthFetching(true));
        authAPI.logout().then(data=>{
            dispatch(getLogin());
            dispatch(changeAuthFetching(false));
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
        case "setUser":
            return {
                ...state,
                dataProfile: action.dataProfile,
                isAuth: action.dataProfile.resultCode===0?true:false
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