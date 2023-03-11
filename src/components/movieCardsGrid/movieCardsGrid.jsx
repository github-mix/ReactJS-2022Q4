import './movieCardsGrid.scss';
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movieCard/movieCard';
import Grid from '../grid/grid';

function MovieCardsGrid(props) {
    const { children } = props;

    return (
        <>
            <div className="c-movie-cards-grid-title">
                <b>{children.length}</b>
                {' '}
                movies found
            </div>
            <Grid gap="default">
                {Object.keys(children).map((movieID) => ({
                    id: movieID,
                    node: <MovieCard movieID={movieID} data={children[movieID]} />,
                }))}
            </Grid>
        </>
    );
}

MovieCardsGrid.propTypes = {
    children: PropTypes.objectOf(PropTypes.exact({
        // id: PropTypes.number,
        title: PropTypes.string,
        date: PropTypes.string, // 'YYYY-MM-DD'
        pictUrl: PropTypes.string,
        rating: PropTypes.number,
        genres: PropTypes.objectOf(PropTypes.bool),
        year: PropTypes.number,
        overview: PropTypes.string,
    })),
};
MovieCardsGrid.defaultProps = {
    children: null,
};

export default MovieCardsGrid;
