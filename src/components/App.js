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

		store.subscribe(() => {
			console.log("subscibe")
			this.forceUpdate();
		})
		
		store.dispatch(add_movies(data));
		console.log("store = ",this.props.store.getState());
	}

	isMovieFavourite = (movie) => {

		const moviesList = this.props.store.getState().movies.listFavourites;
		//console.log("ml", moviesList)

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
		console.log("store", store.getState());
		const {movies} = store.getState();
		console.log("moviesRed", movies)
		const {listMovies, listFavourites, showFavouritesTab} = movies;
		const val = showFavouritesTab;

		const moviesAll = val ? listFavourites : listMovies;
		console.log("movies",moviesAll)
		
		return (
			<div className="App">
				<Navbar_Component />
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

