

// action types
export const addMovies = 'Add/Movies';
export const addFavourite = 'Add/Favourite';
export const removeFavourite = 'Remove/Favourite';
export const showTab = 'Show/Tab';
export const addSearchMovie = 'add/SearchMovie'; 
export const addMovieToList = 'add/MovieToList';

// action creators
export const add_movies = (movies) => {
    return {
        type: addMovies,
        movies
    }
}

export const add_favourite = (movie) => {
    return {
        type: addFavourite,
        movie
    }
}

export const remove_favourite = (movie) => {
    return {
        type: removeFavourite,
        movie
    }
}

export const show_tabs = (isFav) => {
    return {
        type: showTab,
        showFavourites: isFav
    }
}

export const add_Searched_movie = (movie) => {
    return {
        type: addSearchMovie,
        movie
    }
}

export const add_movie_to_list = (movie) => {
    return {
        type: addMovieToList,
        movie
    }
}

export const handleSearchMovie = (movie) => {
    return function(dispatch) {
        console.log(dispatch)
        console.log("movies")

        const url = `http://www.omdbapi.com/?i=tt3896198&apikey=30ca8786&t=${movie}`;
    
        fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log("movie is", movie)
            dispatch(add_Searched_movie(movie))
        })
    
        // call dispatch to add this movie to store
      
    }
}