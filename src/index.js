import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';


function rerenderTree(){ //оборачиваем перерисовку в функцию, чтобы ее можно было вызывать после каждого изменения в состоянии
    ReactDOM.render(<App store = {store}/>, document.getElementById('root'));
}

rerenderTree(); //стартуем
store.subscribe(rerenderTree); //прокидываем перерисовку в store. Это необходимо для перерисовки UI после изменения state

serviceWorker.unregister();
