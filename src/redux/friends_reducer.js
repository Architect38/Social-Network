//Типы action====================================
const followChange = "followChange";
//===============================================

//Конструкторы action============================
export function followChangeActionCreator(id){
    return {
        type: followChange,
        id: id
    }
}

//=================================================

//Начальный state===================================
let initialState = {
    friends: [
        {id:1, firstName:"Andrew", lastName:"Kuznetsov", follow:true},
        {id:2, firstName:"Katya", lastName:"Petrova", follow:false},
        {id:3, firstName:"Nastya", lastName:"Catcher", follow:false},
        {id:4, firstName:"Peter", lastName: "Ivanov", follow:true}
    ]
}
//===================================================

const friendsReducer = function(state = initialState, action){
    switch(action.type){
        case followChange:
            return {
                ...state,
                friends: [...state.friends].map((item)=>{
                    if(item.id==action.id) return {...item, follow: item.follow = item.follow?false:true}
                    return item;
                })
            }
        default:
            return state;
    }
}

export default friendsReducer;