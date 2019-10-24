import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';


function rerenderTree(){ //оборачиваем перерисовку в функцию, чтобы ее можно было вызывать после каждого изменения в состоянии
    ReactDOM.render(<App state = {store.state} dispatch = {store.dispatch.bind(store)}/>, document.getElementById('root'));
}

rerenderTree(); //стартуем
store.subscribe(rerenderTree);/*мы прокидываем так перерисовку в state.js
Что то меняется в состоянии, надо перерисовать UI, для этого необходимо вызвать
перерисовку*/

serviceWorker.unregister();
