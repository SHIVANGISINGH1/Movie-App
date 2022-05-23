{
//    type: 'Add_Movie'
//    movies: [m1,m2]
}

// action types
export const addMovies = 'Add/Movies';
export const addFavourite = 'Add/Favourite';
export const removeFavourite = 'Remove/Favourite';

// action creators
export const add_movies = (movies) => {
    return {
        type: addMovies,
        movies: movies
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

