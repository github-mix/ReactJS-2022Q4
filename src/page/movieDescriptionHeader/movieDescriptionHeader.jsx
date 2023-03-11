import './movieDescriptionHeader.scss';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import movies from '../../mock/movies';
import Button from '../../components/button/button';

function MovieDescriptionHeader(props) {
    const { movieID, showSearchHeader } = props;
    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const movie = movies[movieID];

    const handlePictLoad = () => {
        setIsImgLoaded(true);
    };

    const imgClassNames = classNames('c-movie-description__img', {
        'm-not-loaded': !isImgLoaded,
    });

    useEffect(() => {
        setIsImgLoaded(false);
    }, [movieID]);

    return (
        <div className="c-movie-description">
            <Button mode="primary" size="small" onClick={showSearchHeader}>search</Button>
            <div className={imgClassNames}>
                <img src={movie.pictUrl} onLoad={handlePictLoad} alt={movie.title} />
            </div>
            <div className="c-movie-description__title">
                {movie.title}
                <span className="c-movie-description__rating">{movie.rating ? movie.rating : '-.-'}</span>
            </div>
            <div className="c-movie-description__genres">
                {Object.keys(movie.genres).join(' & ')}
            </div>
            <div className="c-movie-description__year">
                {movie.year}
            </div>
            <div className="c-movie-description__info">
                {movie.overview ? movie.overview : '[no overview]'}
            </div>
        </div>
    );
}

MovieDescriptionHeader.propTypes = {
    movieID: PropTypes.string.isRequired,
    showSearchHeader: PropTypes.func,
};
MovieDescriptionHeader.defaultProps = {
    showSearchHeader: null,
};

export default MovieDescriptionHeader;
