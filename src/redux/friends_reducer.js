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
//=================================================

//Начальный state===================================
let initialState = {
    friends: [
        // {id:1, firstName:"Andrew", lastName:"Kuznetsov", follow:true},
        // {id:2, firstName:"Katya", lastName:"Petrova", follow:false},
        // {id:3, firstName:"Nastya", lastName:"Catcher", follow:false},
        // {id:4, firstName:"Peter", lastName: "Ivanov", follow:true}
    ],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false
}
//===================================================

const friendsReducer = function(state = initialState, action){
    switch(action.type){
        case "followChange":
            return {
                ...state,
                friends: [...state.friends].map((item)=>{
                    if(item.id==action.id) return {...item, follow: item.followed = item.followed?false:true}
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
        default:
            return state;
    }
}

export default friendsReducer;