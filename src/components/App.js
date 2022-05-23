import React from 'react';
import { Button } from 'react-bootstrap';
import Navbar_Component from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card_Component from './Card_Component'
import { add_movies } from '../actions';
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
		console.log("ml", moviesList)

		const index = moviesList.indexOf(movie);
		if (index === -1) {
			return false;
		}
	
		return true;
		
	}

	render() {
		console.log("render")
		const movies = this.props.store.getState().addMovie.listMovies;
		console.log("olaoal", movies)
		console.log(this.props.store.getState())
		return (
			<div className="App">
				<Navbar_Component />
				<div className="main">
				<div className="tabs">
					<Button variant="warning">Movies</Button>
					<Button variant="info">Favourites</Button>
				</div>

				<div className="list">
					{movies.map((movie,index) => (
					<Card_Component 
						movie={movie} 
						key={index} 
						dispatch={this.props.store.dispatch}
						isFav = {this.isMovieFavourite(movie)}/>
				))}
				
				</div>
			</div>
		</div>
		);
  }
  
}
export default App;

