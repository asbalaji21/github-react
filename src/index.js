import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import GitRepoFetcher from './container/GitRepoFetcher';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(<Provider store = {store}><GitRepoFetcher/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
