//Конструкторы action-объектов============================
export function followChange(id){
    return {
        type: "followChange",
        id: id
    }
}
export function setFriends(arr){
    return {
        type: "setFriends",
        arr
    }
}
export function changeCurrentPage(page){
    return {
        type: "changeCurrentPage",
        page
    }
}
export function toggleIsFetching(status){
    return {
        type: "toggleIsFetching",
        status
    }
}
export function toggleIsFollowFetching(id){
    return {
        type: "toggleIsFollowFetching",
        id
    }
}
//=================================================

//Начальный state===================================
let initialState = {
    friends: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
    isFollowFetching: [],
}
//===================================================

const friendsReducer = function(state = initialState, action){
    switch(action.type){
        case "followChange":
            return {
                ...state,
                friends: [...state.friends].map(item=>{
                    if (action.id==item.id) return {...item, followed: item.followed==true?false:true}
                    return item;
                })
            }
        case "setFriends":
            return {
                ...state,
                friends: action.arr
            }
        case "changeCurrentPage":
            return {
                ...state,
                currentPage: action.page
            }
        case "toggleIsFetching":
            return {
                ...state,
                isFetching: action.status
            }
        case "toggleIsFollowFetching":
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

export default friendsReducer;