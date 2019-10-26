//Типы action====================================
const add_post = "add_post";
const change_post = "change_post";
//===============================================

//Конструкторы action============================
export const addPostActionCreator = function(newPost){
    return {type: add_post, newPost:newPost}
}
export const changePostActionCreator = function(){
    return {type: change_post}
}
//==================================================

//Начальный state===================================
let initialState = {
    posts: [
        {id:1, post:"Post#1", status:"added"},
        {id:2, post:"Post#2", status:"added"},
        {id:3, post:"Post#3", status:"added"},
    ]
}
//===================================================

const profileReducer = function(state = initialState,action){
    switch(action.type){
        case add_post: 
            state.posts.push({id:5,post:action.newPost, status:"added"});
            break;
        default:
            return state;
    }
    return state;
}

export default profileReducer;