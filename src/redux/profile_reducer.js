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
export const deletePost = (idPost) =>{
    return {
        type: "delete_post",
        idPost
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

export const updateStatus = (status)=>{
    return (dispatch)=>{
        profileAPI.updateStatus(status).then(response=>{
            dispatch(setStatus(status));
        });
    }
}

export const updatePhoto = (photoFile, id) => {
    return (dispatch)=>{
        dispatch(changeFetching(true));
        profileAPI.updatePhoto(photoFile).then(response=>{
            dispatch(changeFetching(false));
            dispatch(getProfile(id));
        });
    }
}


//Начальный state===================================
let initialState = {
    profileInfo: null,
    status:"",
    posts: [
        {id:1, post:"hi!!!!!!!!!!!!!", status:"added"},
        {id:2, post:"Hellooooooo!", status:"added"},
        {id:3, post:"I'm Andrew!", status:"added"},
    ],
    isFetching: false
}
//===================================================

const profileReducer = function(state = initialState,action){ 
    switch(action.type){
        case "add_post": 
            return {      
                ...state, 
                posts: [...state.posts, {id:state.posts.length+1, post: action.newPost, status:"added" }] 
            }
        case "delete_post": 
            return {      
                ...state, 
                posts: state.posts.filter((item)=>{
                    return item.id!=action.idPost;
                })
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