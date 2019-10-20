import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import {addPost, changePost} from './redux/state';

function rerenderTree(){ //оборачиваем перерисовку в функцию, чтобы ее можно было вызывать после каждого изменения в состоянии
    ReactDOM.render(<App state = {state} addPost = {addPost} changePost = {changePost}/>, document.getElementById('root'));
}

rerenderTree(); //стартуем
subscribe(rerenderTree);/*мы прокидываем так перерисовку в state.js
Что то меняется в состоянии, надо перерисовать UI, для этого необходимо вызвать
перерисовку*/

serviceWorker.unregister();
