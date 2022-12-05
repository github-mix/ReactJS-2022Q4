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
                {children.map((movie) => ({
                    id: movie.id,
                    node: <MovieCard
                        pictUrl={movie.pictUrl}
                        title={movie.title}
                        genres={movie.genres}
                        year={movie.year}
                    />,
                }))}
            </Grid>
        </>
    );
}

MovieCardsGrid.propTypes = {
    children: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number,
        title: PropTypes.string,
        year: PropTypes.number,
        genres: PropTypes.arrayOf(PropTypes.string),
        pictUrl: PropTypes.string,
    })),
};
MovieCardsGrid.defaultProps = {
    children: null,
};

export default MovieCardsGrid;
