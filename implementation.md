## Features added from time to time to this app

### 1.  Intial build: 

A simple UI created with app component consisting
Navbar component and movie card component
Initially we were adding movies to movie card through state 

### 2.  Added functionality of [store](https://redux.js.org/api/store)

Store created with addmovies reducer which contains only add movie functionality
The working of store
UI rendered on page -> componentDidMount -> change in state -> 
dispatched action add movies -> called the reducer for add movies -> returned the new updated state    

### 3.  Added feature to add Favourite and remove with two tabs for Movies and Favourites 

For adding the movie to favourite: On clicking the favourites button 
An action is dispatched to add movie to the favourite list
*IMP our current state looks like* 

        movie: {
            listMovies: [],
            listFavourites: [],
            showFavouritesTab : false
        }


Initial showFavouritesTab was made false to show movie in the movies section 

Now removing the movie from the favourites was also similar 
See code at *Link*

Adding the movies to the favourite tab: 
On clicking the favourite tab we would change the showFavouritesTab to true
and show the movies added to the favourite section 

### 4.  For adding the search feature

*An important concept of [combining the reducers](https://redux.js.org/api/combinereducers)* 

To add the search feature we can add this to our state where we will store the 
result of the search found. 
So search state is now modified to 
        
        search = {
            result: {}
        } 
we will make another reducer search for adding the search feature and combine them
by combineReducers method 
                        
                        combineReducers ({
                            movies,
                            search
                        })

### 5.  Adding middleware 

What is a [middleware](https://redux.js.org/api/applymiddleware)? 

    Initally I have attached one middleware to the code, named logger 
            
            const logger = function({dispatch, getState}) {
                return function(next) {
                    return function(action) {
                        console.log("Action type", action.type);
                        next(action);
 		            }
          	    }
            }

After dispatching a function the middleware is called, so to see which action is 
dispatched when we can call this logger function.


### 6.  Using the omdb API for fetching the searched movie

We can write our API calls using middleware as they are executed after dispatching an action.
We can call an API in our action and fetch the movie and we can call another action
with it too.
[code](src%5Cactions%5Cindex.js)


We can use an inbuilt middleware called [thunk](https://redux.js.org/usage/writing-logic-thunks#thunk-overview)  
 
            const thunk = ({dispatch, getState}) => (next) => (action) => {
                if (typeof(action) === 'function') {
                    action(dispatch);
                    return;
                }
                next(action);
            }

            const store =  configureStore({
                reducer: reducer,
                middleware: [logger, thunk]
            })

### 7. Completing the search feature and adding the movie to searched movie list

We are using the following actions for this feature.
    
 **1. handleSearchMovie(searchText)** -> It takes the entered value to be searced and calls the omdb api to get the movie, which calls further another action.

 **2. add_Searched_movie(movie)** -> It adds the searched movie to the result object in the store and updates the state.

 **3. add_movie_to_list(result)** -> this adds the movie searched to the existing list of movies.

### 8. Using react [Context](https://reactjs.org/docs/context.html#when-to-use-context) 
When we do not share the content between components using props, we can use context
`Context` is created as    `const StoreContext = createContext();`

The `Context` object have two main features
 
 **Provider:** You can pass your store in this provider component and define this component by passing the store as value in the StoreContext.Provider component
    
 All the decendents of this Provider component will be able to access the store.
 [See in code](src%5Cindex.js)
    
 **Consumer:** To get the access of store in the components we need Consumer component
 It accepts a callback with the argument of the value equals to the value given in Provider. Everytime store changes this component re renders.

        <StoreContext.Consumer>
            {(store) => (
                // app component
            )}	
        </StoreContext.Consumer>

 But in our code we are accessing the store in the componentDidMount which we can not get using if we use Consumer like this, store will be undefined.

 To avoid this we can wrap this in another component and pass store as props to it.
 [code](src%5Ccomponents%5CApp.js)