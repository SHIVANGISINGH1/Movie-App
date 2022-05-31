import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { configureStore, combineReducers} from '@reduxjs/toolkit'


import './index.css';
import reducer from './reducers/index';

const store =  configureStore({
	reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App store={store}/>
	</React.StrictMode>
);



