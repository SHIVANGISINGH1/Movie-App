import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { configureStore} from '@reduxjs/toolkit'
import App from './components/App'
import './index.css';
import reducer from './reducers/index';


const logger = ({dispatch, getState}) => (next) => (action) => {
	console.log("Action type", action.type);
	next(action);
	
}

const store =  configureStore({
	reducer: reducer,
	middleware: [logger, thunk]
})

export const StoreContext = createContext();

console.log("storeContext",StoreContext)

class Provider extends React.Component {
	render() {
		const {store} = this.props;
		return (<StoreContext.Provider value={store}>
			{this.props.children}
		</StoreContext.Provider>)
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App/>
	</Provider>
);












