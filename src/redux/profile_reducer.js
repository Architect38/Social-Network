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

const profileReducer = function(state = initialState,action){ //При изменении состояния мы должны возвращать копию объекта
    switch(action.type){
        case add_post: 
            return {      //возвращаем объект
                ...state, //свойства от изначального объекта
                posts: [...state.posts, {id:8, post: action.newPost, status:"added" }] //перезаписываем posts, где добавляем новый пост
            }
        default:
            return state;
    }
}

export default profileReducer;