import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { configureStore} from '@reduxjs/toolkit'


import './index.css';
import reducer from './reducers/index';


const logger = function({dispatch, getState}) {
	return function(next) {
		return function(action) {
			console.log("Action type", action.type);
			next(action);
		}
	}
}



const store =  configureStore({
	reducer: reducer,
	middleware: [logger]
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App store={store}/>
	</React.StrictMode>
);



