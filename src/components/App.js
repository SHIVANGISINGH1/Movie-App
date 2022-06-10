import React from 'react';
import { Button } from 'react-bootstrap';
import NavbarComponent from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card_Component from './Card_Component';
import { add_movies, show_tabs } from '../actions';
import data from '../data';
import { connect } from '..';

 class App extends React.Component {

	componentDidMount() {
		const {dispatch} = this.props;
		// dispatching means sending your action to the reducer
		dispatch(add_movies(data));
	}

	isMovieFavourite = (movie) => {

		const moviesList = this.props.movies.listFavourites;

		const index = moviesList.indexOf(movie);
		if (index === -1) {
			return false;
		}
	
		return true;
		
	}

	showTab = (value) => {
		const {dispatch} = this.props;
		dispatch(show_tabs(value));
	}

	

	render() {
		
		const {movies, search, dispatch} = this.props;
		const {listMovies, listFavourites, showFavouritesTab} = movies;
		const val = showFavouritesTab;

		const moviesAll = val ? listFavourites : listMovies;
		return (
			<div className="App">
				<NavbarComponent/>
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
						dispatch= {dispatch}
						isFav = {this.isMovieFavourite(movie)}/>
				))}
				{moviesAll.length === 0 ? <div>No favourites found</div>: null}
				</div>
			</div>
		</div>
		);
  }
  
}



function callback(state) {
	return {
		movies: state.movies,
		search: state.search
	}
}
const connectedAppComponent = connect(callback)(App);

export default connectedAppComponent;
