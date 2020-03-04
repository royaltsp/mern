import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom';

import Ecomm from "./apps/ecomm/Ecomm";
import Securum from "./apps/securum/Securum";
import TableResize from "./apps/table-resize/TableResize";


import { loadFromLocalStorage, saveToLocalStorage } from './redux-persist'
const apps = ['ecomm', 'securum', 'table-resize'];
const appNumber = 3;

const allReducers = require(`./apps/${apps[appNumber - 1]}/reducers/allReducers`).allReducers;

const persistedState = loadFromLocalStorage()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(allReducers, persistedState, composeEnhancers(applyMiddleware(thunk)));

myStore.subscribe(() => saveToLocalStorage(myStore.getState()))

function App() {
    switch (apps[appNumber - 1]) {
        case 'ecomm': { return <Ecomm /> } break;
        case 'securum': { return <Securum /> } break;
        case 'table-resize': { return <TableResize /> } break;
    }
}

ReactDOM.render(
    <div>
        <Provider store={myStore}>
            <Router>
                <App />
            </Router>
        </Provider>
    </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
