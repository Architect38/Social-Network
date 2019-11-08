import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import {Provider} from 'react-redux'; //С помощью провайдера мы можем прокинуть store на все приложение.


ReactDOM.render(
    <Provider store = {store}>
        <App/> 
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
















