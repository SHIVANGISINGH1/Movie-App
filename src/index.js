import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import {Provider } from 'react-redux';
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

// export const StoreContext = createContext();

// console.log("storeContext",StoreContext)

// class Provider extends React.Component {
// 	render() {
// 		const {store} = this.props;
// 		return (<StoreContext.Provider value={store}>
// 			{this.props.children}
// 		</StoreContext.Provider>)
// 	}
// }
// //connect(callback)(App)
// export function connect(callback) {

// 	return function(ConnectedComponent) {
// 		class Component extends React.Component {

// 			constructor(props) {
// 				super(props);
// 				this.unsubscribe = this.props.store.subscribe(() => {
// 					console.log("subscibe")
// 					this.forceUpdate();
// 				})
// 			}

// 			componentWillUnmount() {
// 				this.unsubscribe();
// 			}

// 			render() {
// 				const {store} = this.props;
// 				const state = store.getState();
// 				const dataToBePassedAsProps = callback(state);
// 				return <ConnectedComponent {...dataToBePassedAsProps} dispatch={store.dispatch}/>
// 			}
// 		}

// 		class ComponentWrapper extends React.Component {

// 			render() {
// 				return (
// 					<StoreContext.Consumer>
// 						{(store) => (
// 							<Component store={store}/>
// 						)}
// 					</StoreContext.Consumer>
// 				)
// 			}
// 		}
		
// 		return ComponentWrapper;
// 	}

// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App/>
	</Provider>
);












