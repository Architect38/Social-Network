//Типы action====================================
const add_message = "add_message";
//===============================================

//Конструкторы action============================

export const addMessageActionCreator = function(message){
    return {type:add_message, message: message}
}
//=================================================

const dialogsReducer = function(state, action){
    switch(action.type){
        case add_message:
            state.messages.push({id:7, message:action.message});
            break;
        default:
            return state;
    }
}

export default dialogsReducer;