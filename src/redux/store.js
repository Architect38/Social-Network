import { createStore, combineReducers } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from "./dialogs_reducer";
import friendsReducer from "./friends_reducer";
import authReducer from "./auth_reducer";


let reducers = combineReducers({ 
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;