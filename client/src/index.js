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
import allReducers from './apps/securum/reducers/allReducers';

function saveToLocalStorage(state){
    try {
        const serializeState = JSON.stringify(state)
        localStorage.setItem('state', serializeState)
    } catch (error) {
        console.log(error)
    }
}

function loadFromLocalStorage(){
    try {
        const serializeState = localStorage.getItem('state')
        if(serializeState === null) return undefined
        return JSON.parse(serializeState)
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const myStore = createStore(allReducers, persistedState, composeEnhancers(applyMiddleware(thunk)));

myStore.subscribe(() => saveToLocalStorage(myStore.getState()))

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
