{
//    type: 'Add_Movie'
//    movies: [m1,m2]
}

// action types
export const addMovies = 'Add/Movies';

// action creators
export const add_movies = (data) => {
    return {
        type: 'Add/Movies',
        movies: data
    }
}