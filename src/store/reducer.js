import { createReducer } from '@reduxjs/toolkit';
import ACTIONS from './actionTypes';
import { GENRES } from '../globalConstants';
// import movies from '../mock/movies';

// const reducer = (state = movies.data, action) => { // legacy approach
//     switch (action.type) {
//     case ACTIONS.UPDATE_MOVIE_SUCCESS:
//         return state.map((movie) => ((movie.id === action.payload.id) ? action.payload.data : movie));
//
//     case ACTIONS.REMOVE_MOVIE_SUCCESS:
//         return state.filter((movie) => movie.id !== action.payload.id);
//
//     default:
//         return state;
//     }
// };

const initialState = {
    isLoading: false,
    error: null,
    outputParams: {
        filter: GENRES.ADVENTURE,
    },
    moviesData: {
        data: [],
    },
};

const reducer = createReducer(initialState, (builder) => {
    /* eslint-disable */
    builder
        .addCase(ACTIONS.REQUEST, (state, action) => {
            state.isLoading = true;
            state.outputParams = {
                ...state.outputParams,
                ...action.payload.outputParams,
            }
        })
        .addCase(ACTIONS.ERROR, (state, action) => {
            state.error = action.payload.error;
            state.isLoading = false;
        })
        .addCase(ACTIONS.FETCH_MOVIES_SUCCESS, (state, action) => {
            return {
                ...state,
                moviesData: action.payload.moviesData,
                isLoading: false,
            }
        })
        .addCase(ACTIONS.ADD_MOVIE_SUCCESS, (state, action) => {
            const seconds = new Date().getTime() / 1000;

            state.moviesData.data.push({
                ...action.payload.movie,
                id: Math.trunc(seconds),
            });
        })
        .addCase(ACTIONS.UPDATE_MOVIE_SUCCESS, (state, action) => {
            state.moviesData.data = state.moviesData.data.map((movie) => (
                (movie.id === action.payload.movie.id) ? action.payload.movie : movie
            ))
        })
        .addCase(ACTIONS.REMOVE_MOVIE_SUCCESS, (state, action) => {
            state.moviesData.data = state.moviesData.data.filter((movie) => movie.id !== action.payload.id);
        });
    /* eslint-enable */
});

export default reducer;
