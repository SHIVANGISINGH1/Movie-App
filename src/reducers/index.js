import {addMovies} from '../actions/index';

const intialState = [];

function addMovie(state = intialState, action) {
    if (action.type === addMovies) {
        return action.movies;
    }
    return state;
}

export default addMovie;