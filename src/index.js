import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { configureStore} from '@reduxjs/toolkit'


import './index.css';
import reducer from './reducers/index';


// const logger = function({dispatch, getState}) {
// 	return function(next) {
// 		return function(action) {
// 			console.log("Action type", action.type);
// 			next(action);
// 		}
// 	}
// }

const logger = ({dispatch, getState}) => (next) => (action) => {
	console.log("Action type", action.type);
	next(action);
	
}

const thunk = ({dispatch, getState}) => (next) => (action) => {
	if (typeof(action) === 'function') {
		action(dispatch);
		return;
	}
	next(action);
}

const store =  configureStore({
	reducer: reducer,
	middleware: [logger, thunk]
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App store={store}/>
	</React.StrictMode>
);



