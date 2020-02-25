import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

//Development only axios helpers
import axios from 'axios';
window.axios = axios;

//redux store setup
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//creating reducer to be used in the redux store
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
