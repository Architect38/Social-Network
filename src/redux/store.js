import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from "./dialogs_reducer";
import friendsReducer from "./friends_reducer";
import authReducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({ 
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    auth: authReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;