//Конструкторы action============================

export const loginUser = function(dataProfile){
    return {
        type:"login_user", 
        dataProfile
    }
}
//=================================================

//Начальный state===================================
let initialState = {
    isAuth: false,
    dataProfile:null
}
//===================================================

const authReducer = function(state = initialState, action){
    switch(action.type){
        case "login_user":
            return {
                ...state,
                dataProfile: action.dataProfile,
                isAuth: action.dataProfile.resultCode==0?true:false
            }
        default:
            return state;
    }
}

export default authReducer;