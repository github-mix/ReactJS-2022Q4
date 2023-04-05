import ACTIONS from './actionTypes';

export const requestMovies = (outputParams) => ({
    type: ACTIONS.REQUEST,
    payload: { outputParams },
});

export const errorMovies = (error) => ({
    type: ACTIONS.ERROR,
    payload: { error },
});

export const fetchMoviesSuccess = (moviesData) => ({
    type: ACTIONS.FETCH_MOVIES_SUCCESS,
    payload: { moviesData },
});

export const addMovieSuccess = (movie) => ({
    type: ACTIONS.ADD_MOVIE_SUCCESS,
    payload: { movie },
});

export const updateMovieSuccess = (movie) => ({
    type: ACTIONS.UPDATE_MOVIE_SUCCESS,
    payload: { movie },
});

export const removeMovieSuccess = (id) => ({
    type: ACTIONS.REMOVE_MOVIE_SUCCESS,
    payload: { id },
});

export const fetchMovies = (outputParams) => async (dispatch, getState) => {
    dispatch(requestMovies(outputParams));

    try {
        const params = Object.entries(getState().outputParams).map((item) => item.join('=')).join('&');
        const urlParams = (params) ? `?${params}` : '';

        const response = await fetch(`http://localhost:4000/movies${urlParams}`);
        const movies = await response.json();

        dispatch(fetchMoviesSuccess(movies));
    } catch (error) {
        dispatch(errorMovies(error));
    }
};
