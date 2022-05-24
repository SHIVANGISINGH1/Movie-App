import {addMovies, removeFavourite, showTab} from '../actions/index';
import { addFavourite } from '../actions/index';

const initialState = {
    listMovies: [],
    listFavourites: [],
    showFavouritesTab: false
};

function addMovie(state = initialState, action) {
    if (action.type === addMovies) {
        return {
            ...state,
            listMovies : action.movies
        }
    }

    else if (action.type === addFavourite) {
        console.log("initial state" , state)
        return {
            ...state,
            listFavourites: [action.movie, ...state.listFavourites]
        }
    }

    else if (action.type === removeFavourite) {

        const filteredMovies = state.listFavourites.filter((ele) => {
            return ele !== action.movie; 
        })

        return {
            ...state,
            listFavourites : filteredMovies
        }
    }

    else if (action.type === showTab) {
        return {
            ...state,
            showFavouritesTab : action.showFavourites
        }
    }

    else 
    return state;
}

export default addMovie;