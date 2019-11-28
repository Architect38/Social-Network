import { usersAPI } from './../api/api';

const CHANGE_FOLLOW = "friends_reducer/CHANGE_FOLLOW";
const SET_FRIENDS = "friends_reducer/SET_FRIENDS";
const CHANGE_CURRENT_PAGE = "friends_reducer/CHANGE_CURRENT_PAGE";
const TOGGLE_IS_FEATCHING = "friends_reducer/TOGGLE_IS_FEATCHING";
const TOGGLE_IS_FOLLOW_FEATCHING = "friends_reducer/TOGGLE_IS_FOLLOW_FEATCHING";

let initialState = {
    friends: [
        {   
            followed: false,
            id: 5204,
            name: "noName",
            photos: {small: null, large: null},
            status: null
        },
    ],
    pageSize: 5,
    totalUsersCount: 1000,
    currentPage: 1,
    isFetching: false,
    isFollowFetching: [],
}

export default function friendsReducer(state = initialState, action){
    switch(action.type){
        case CHANGE_FOLLOW:
            return {
                ...state,
                friends: [...state.friends].map(item=>{
                    if (action.id==item.id) return {...item, followed: item.followed==true?false:true}
                    return item;
                })
            }
        case SET_FRIENDS:
            return {
                ...state,
                friends: action.arr
            }
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case TOGGLE_IS_FEATCHING:
            return {
                ...state,
                isFetching: action.status
            }
        case TOGGLE_IS_FOLLOW_FEATCHING:
            return {
                ...state,
                isFollowFetching: [...state.isFollowFetching].some(r=>{return r==action.id})===true
                ?[...state.isFollowFetching].filter(r=>{return r!=action.id})
                :[...state.isFollowFetching, action.id]
                
            }
        default:
            return state;
    }
}

function followChange(id){
    return {
        type: CHANGE_FOLLOW,
        id: id
    }
}
function setFriends(arr){
    return {
        type: SET_FRIENDS,
        arr
    }
}
function toggleIsFetching(status){
    return {
        type: TOGGLE_IS_FEATCHING,
        status
    }
}
function toggleIsFollowFetching(id){
    return {
        type: TOGGLE_IS_FOLLOW_FEATCHING,
        id
    }
}
export function changeCurrentPage(page){
    return {
        type: CHANGE_CURRENT_PAGE,
        page
    }
}
export const getUsers = (currentPage, pageSize)=>{
    return async (dispatch)=>{
        dispatch(toggleIsFetching(true));
        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setFriends(response.items));
        dispatch(toggleIsFetching(false));
    }
}
export const follow = (id, status)=>{
    return async (dispatch)=>{
        let response;
        dispatch(toggleIsFollowFetching(id));
        status==="follow"
          ? response = await usersAPI.unfollow(id)
          : response = await usersAPI.follow(id)
        if (response.data.resultCode==0) dispatch(followChange(id));
        dispatch(toggleIsFollowFetching(id)); 
    }   
}






