import { createReducer } from '@reduxjs/toolkit';
import ACTIONS from './actionTypes';
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
    moviesData: {
        data: [],
    },
};

const reducer = createReducer(initialState, (builder) => {
    /* eslint-disable */
    builder
        .addCase(ACTIONS.REQUEST, (state) => {
            state.isLoading = true;
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
    /* eslint-enable */
});

export default reducer;
