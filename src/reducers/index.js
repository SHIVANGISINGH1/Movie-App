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
    switch(action.type) {
        case addMovies: {
            return {
                ...state,
                listMovies : action.movies
            }
            
        }

        case addFavourite : {
            return {
                ...state,
                listFavourites: [action.movie, ...state.listFavourites]
            }
        }

        case removeFavourite : {  
            const filteredMovies = state.listFavourites.filter((ele) => {
                return ele !== action.movie; 
            })
    
            return {
                ...state,
                listFavourites : filteredMovies
            }
        }

        case addMovieToList : {
            return {
                ...state,
                listMovies: [action.movie, ...state.listMovies]
            }
        }

        case showTab : {
            return {
                ...state,
                showFavouritesTab : action.showFavourites
            }
        }

        default: return state;
    }
    
}


export function search(state = intitalSearchState, action) {

    switch(action.type) {
        case addSearchMovie : {
            return {
                result: action.movie,
                showSearch: true
            }
        }

        case addMovieToList : {
            return {
                ...state,
                showSearch: false
            }
        }

        default: return state;
    }
}

export default combineReducers ({
    movies,
    search
})