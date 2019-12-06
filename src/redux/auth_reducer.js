import { authAPI } from "../api/api";
import {stopSubmit} from 'redux-form';
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
const setCaptchaUrl = (captchaUrl)=>{
    return {
        type: "set_captcha",
        captchaUrl
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
export const getCaptchaUrl = ()=>{
    return async (dispatch)=>{
        const response = await authAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(setCaptchaUrl(captchaUrl));
    }
}
export const postLogin = (login,password,rememberMe,captcha)=>{
    return (dispatch)=>{
        dispatch(changeAuthFetching(true));
        authAPI.postLogin(login,password,rememberMe, captcha).then(data=>{
            if (data.data.resultCode===0) dispatch(getLogin());
            else {
                if (data.data.resultCode===10) dispatch(getCaptchaUrl());
                dispatch(changeAuthFetching(false));
                dispatch (stopSubmit("login", {_error:data.data.messages[0]}));
            }
        });
    }
}
export const logout = ()=>{
    return (dispatch)=>{
        dispatch(changeAuthFetching(true));
        authAPI.logout().then(data=>{
            dispatch(getLogin());
            dispatch(setCaptchaUrl(null));
            dispatch(changeAuthFetching(false));
        });
    }
}

//Начальный state===================================
let initialState = {
    isAuth: false,
    authFetching: false,
    dataProfile: null,
    captchaUrl: null,
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
        case "set_captcha":
            return {
                ...state,
                captchaUrl: action.captchaUrl
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
