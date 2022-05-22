const intialState = [];

function addMovie(state = intialState, action) {
    if (action.type === 'Add/movies') {
        return action.movies;
    }
    return state;
}

export default addMovie;