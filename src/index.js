import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { configureStore } from '@reduxjs/toolkit'
import addMovie from './reducers/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const addmovie = () => {
  return {
   type: 'Add/movies',
   movies: [{title: 'Catty'}]
  }
}
const store =  configureStore({
 reducer: {
    addMovie
 },
})
console.log(store.getState())
store.dispatch(addmovie());
console.log(store.getState())


