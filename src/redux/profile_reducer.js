//Конструкторы action============================
export const addPost = function(newPost){
    return {
        type: "add_post", 
        newPost
    }
}
export const setProfileInfo = function(profileInfo){
    return {
        type: "set_profile", 
        profileInfo
    }
}
//==================================================

//Начальный state===================================
let initialState = {
    info: null,
    posts: [
        {id:1, post:"Post#1", status:"added"},
        {id:2, post:"Post#2", status:"added"},
        {id:3, post:"Post#3", status:"added"},
    ]
}
//===================================================

const profileReducer = function(state = initialState,action){ //При изменении состояния мы должны возвращать копию объекта
    switch(action.type){
        case "add_post": 
            return {      //возвращаем объект
                ...state, //свойства от изначального объекта
                posts: [...state.posts, {id:8, post: action.newPost, status:"added" }] //перезаписываем posts, где добавляем новый пост
            }
        case "set_profile": 
            return {      
                ...state,
                info: action.profileInfo
            }
        default:
            return state;
    }
}

export default profileReducer;