import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} addPost={store.addPost.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
