import {profileAPI} from './../api/api';

//Конструкторы action============================
const setProfile = (profileInfo)=>{
    return {
        type: "setProfile", 
        profileInfo
    }
}
const setStatus = (status)=>{
    return {
        type: "setStatus", 
        status
    }
}
const changeFetching = (status)=>{
    return {
        type: "changeFetching",
        status
    }
}
export const addPost = (newPost)=>{
    return {
        type: "add_post", 
        newPost
    }
}
//==================================================
export const getProfile = (id)=>{
    return (dispatch)=>{
        dispatch(changeFetching(true));
        profileAPI.getProfile(id).then(data=>{
            dispatch(changeFetching(false));
            dispatch(setProfile(data));
        });
    }
}

export const getStatus = (id)=>{
    return (dispatch)=>{
        profileAPI.getStatus(id).then(data=>{
            dispatch(setStatus(data));
        });
    }
}



//Начальный state===================================
let initialState = {
    profileInfo: null,
    status:"",
    posts: [
        {id:1, post:"Post#1", status:"added"},
        {id:2, post:"Post#2", status:"added"},
        {id:3, post:"Post#3", status:"added"},
    ],
    isFetching: false
}
//===================================================

const profileReducer = function(state = initialState,action){ //При изменении состояния мы должны возвращать копию объекта
    switch(action.type){
        case "add_post": 
            return {      //возвращаем объект
                ...state, //свойства от изначального объекта
                posts: [...state.posts, {id:8, post: action.newPost, status:"added" }] //перезаписываем posts, где добавляем новый пост
            }
        case "setProfile":
            return {      
                ...state,
                profileInfo: action.profileInfo
            }
        case "setStatus":
                return {      
                    ...state,
                    status: action.status
                }
        case "changeFetching":
            return {
                ...state,
                isFetching: action.status
            }
        default:
            return state;
    }
}

export default profileReducer;