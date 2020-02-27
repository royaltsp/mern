import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
// import myReducer from './apps/ecomm/reducers/myReducer';
// import userReducer from './apps/ecomm/reducers/userReducer';
import allReducers from './apps/ecomm/reducers/allReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <div>
        <Provider store={myStore}>
            <App />
        </Provider>
    </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
