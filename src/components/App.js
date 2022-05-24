import React from 'react';
import { Button } from 'react-bootstrap';
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

		const moviesList = this.props.store.getState().addMovie.listFavourites;
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
		let movies = [];
		const {store} = this.props;
		const val = store.getState().addMovie.showFavouritesTab;

		movies = val ? this.props.store.getState().addMovie.listFavourites : 
		this.props.store.getState().addMovie.listMovies;
		
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
					{movies.map((movie,index) => (
					<Card_Component 
						movie={movie} 
						key={index} 
						dispatch={this.props.store.dispatch}
						isFav = {this.isMovieFavourite(movie)}/>
				))}
				{movies.length === 0 ? <div>No favourites found</div>: null}
				</div>
			</div>
		</div>
		);
  }
  
}
export default App;

