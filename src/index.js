import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { configureStore } from '@reduxjs/toolkit'
import addMovie from './reducers/index'

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



