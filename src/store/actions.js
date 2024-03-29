import ACTIONS from './actionTypes';

const updateTagline = (movie) => ({
    ...movie,
    tagline: movie.overview.split('.')[0],
});

let prevOutputParams = {};

export const requestMovies = () => ({
    type: ACTIONS.REQUEST,
});

export const errorMovies = (error) => ({
    type: ACTIONS.ERROR,
    payload: { error },
});

export const fetchMoviesSuccess = (moviesData) => ({
    type: ACTIONS.FETCH_MOVIES_SUCCESS,
    payload: { moviesData },
});

export const fetchMovie = (id) => async (dispatch) => {
    dispatch(requestMovies({ filter: null }));

    try {
        const response = await fetch(`http://localhost:4000/movies/${id}`);
        const movie = await response.json();

        dispatch(fetchMoviesSuccess({
            data: [movie],
        }));
    } catch (error) {
        dispatch(errorMovies(error.message));
    }
};

export const fetchMovies = (outputParams = prevOutputParams) => async (dispatch) => {
    prevOutputParams = outputParams;
    dispatch(requestMovies());

    try {
        const paramsArray = Object.entries({
            searchBy: 'title',
            ...outputParams,
        });
        const params = paramsArray.map((item) => item.join('=')).join('&');
        const urlParams = (params) ? `?${params}` : '';
        const response = await fetch(`http://localhost:4000/movies${urlParams}`);
        const movies = await response.json();

        dispatch(fetchMoviesSuccess(movies));
    } catch (error) {
        dispatch(errorMovies(error.message));
    }
};

export const addMovie = (movie) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:4000/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(updateTagline(movie)),
        });
        const responseJSON = await response.json();

        if (responseJSON.messages) {
            alert(JSON.stringify(responseJSON.messages, null, 2));
        } else {
            dispatch(fetchMovie(responseJSON.id));
        }
    } catch (error) {
        dispatch(errorMovies(error.message));
    }
};

export const updateMovie = (movie) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:4000/movies', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(updateTagline(movie)),
        });
        const responseJSON = await response.json();

        if (responseJSON.messages) {
            alert(JSON.stringify(responseJSON.messages, null, 2));
        } else {
            dispatch(fetchMovies());
        }
    } catch (error) {
        dispatch(errorMovies(error.message));
    }
};

export const removeMovie = (id) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:4000/movies/${id}`, { method: 'DELETE' });

        if (response.status === 204) {
            dispatch(fetchMovies());
        } else {
            alert('Error: the movie has not been removed');
        }
    } catch (error) {
        dispatch(errorMovies(error.message));
    }
};
