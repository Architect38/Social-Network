//Типы action====================================
const add_message = "add_message";
//===============================================

//Конструкторы action============================

export const addMessageActionCreator = function(message){
    return {type:add_message, message: message}
}
//=================================================

//Начальный state===================================
let initialState = {
    users: [
        {id:1, name:"Andrew"},
        {id:2, name:"Katya"},
        {id:3, name:"Nastya"},
        {id:4, name:"Peter"}
    ],
    messages: [
        {id:1, message:"Hi, Im fine!"},
        {id:2, message:"Hello!"},
        {id:3, message:"How are u?"},
        {id:4, message:"Where are you from?"},
        {id:5, message:"It's so cool!"}, 
        {id:6, message:"I'm from volgograd"} 
    ]
}
//===================================================

const dialogsReducer = function(state = initialState, action){
    switch(action.type){
        case add_message:
            state.messages.push({id:7, message:action.message});
            break;
        default:
            return state;
    }
    return state;
}

export default dialogsReducer;