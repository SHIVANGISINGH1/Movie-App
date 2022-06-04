import {addMovies, removeFavourite, showTab, addSearchMovie, addMovieToList} from '../actions/index';
import { addFavourite } from '../actions/index';
import {combineReducers} from '@reduxjs/toolkit';


const initialMovieState = {
    listMovies: [],
    listFavourites: [],
    showFavouritesTab : false
}


const intitalSearchState = {
    result: {},
    showSearch: false
};

export function movies(state = initialMovieState, action) {
  
    if (action.type === addMovies) {

        return {
            ...state,
            listMovies : action.movies
        }
    }

    else if (action.type === addFavourite) {
      
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

    else if (action.type === addMovieToList) {

        return {
            ...state,
            listMovies: [action.movie, ...state.listMovies]
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


export function search(state = intitalSearchState, action) {

    if (action.type === addSearchMovie) {
        return {
            result: action.movie,
            showSearch: true
        }
    }

    else if (action.type === addMovieToList) {
        return {
            ...state,
            showSearch: false
        }
    }
    return state;
}

export default combineReducers ({
    movies,
    search
})