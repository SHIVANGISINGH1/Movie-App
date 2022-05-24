import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { configureStore } from '@reduxjs/toolkit'
import addMovie from './reducers/index'
import './index.css';

const store =  configureStore({
  reducer: {
    	addMovie
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App store={store}/>
	</React.StrictMode>
);



