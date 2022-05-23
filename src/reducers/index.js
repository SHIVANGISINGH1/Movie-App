import {addMovies} from '../actions/index';

const initialState = {
    listMovies: [],
    listFavourites: []
};

function addMovie(state = initialState, action) {
    if (action.type === addMovies) {
        return {
            ...initialState,
            listMovies : action.movies
        }
    }
    return state;
}

export default addMovie;