import React from 'react';
import { Button } from 'react-bootstrap';
import {rootReducer} from '../reducers/index';
import Navbar_Component from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card_Component from './Card_Component'
import { add_movies, show_tabs } from '../actions';
import data from '../data'


class App extends React.Component {

	componentDidMount() {

		const {store} = this.props;
		// subscribe is called everytime a action is dispatched 
		store.subscribe(() => {
			console.log("subscibe")
			this.forceUpdate();
		})
		
		// dispatching means sending your action to the reducer
		store.dispatch(add_movies(data));
	}

	isMovieFavourite = (movie) => {

		const moviesList = this.props.store.getState().movies.listFavourites;

		const index = moviesList.indexOf(movie);
		if (index === -1) {
			return false;
		}
	
		return true;
		
	}

	showTab = (value) => {
		const {store} = this.props;
		store.dispatch(show_tabs(value));
	}

	

	render() {
		
		const {store} = this.props;
		const {movies} = store.getState();
		const {search} = store.getState();
		const {listMovies, listFavourites, showFavouritesTab} = movies;
		const val = showFavouritesTab;

		const moviesAll = val ? listFavourites : listMovies;
	
		
		return (
			<div className="App">
				<Navbar_Component search={search} dispatch={store.dispatch} />
				<div className="main">
				<div className="tabs">
					<Button variant="warning" className={val ? 'btn btn-warning chng': ''} onClick={
						(val) => {
							this.showTab(false);
						}
					}>Movies</Button>
					<Button variant="info" className={val ? '' : 'btn btn-info chng'} onClick= {
						(val) => {
							this.showTab(true);
						}
					}>Favourites</Button>
				</div>
				
				
				<div className="list">
					{moviesAll.map((movie,index) => (
					<Card_Component 
						movie={movie} 
						key={index} 
						dispatch= {store.dispatch}
						isFav = {this.isMovieFavourite(movie)}/>
				))}
				{moviesAll.length === 0 ? <div>No favourites found</div>: null}
				</div>
			</div>
		</div>
		);
  }
  
}
export default App;

