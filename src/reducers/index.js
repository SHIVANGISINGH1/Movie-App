import {addMovies, removeFavourite, showFavourites, showAll} from '../actions/index';
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

    else if (action.type === showFavourites) {
     

        return {
            ...state,
            listFavourites : action.movies,
            showFavouritesTab : action.showFavourites
        }
    }

    else if (action.type === showAll) {
        return {
            ...state,
            listMovies: action.movies,
            showFavouritesTab: action.showFavourites
        }
    }
    else 
    return state;
}

export default addMovie;