import './movieDescriptionHeader.scss';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../components/button/button';

function MovieDescriptionHeader(props) {
    const { movie, showSearchHeader } = props;
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    const handlePictLoad = () => {
        setIsImgLoaded(true);
    };

    const imgClassNames = classNames('c-movie-description__img', {
        'm-not-loaded': !isImgLoaded,
    });

    useEffect(() => {
        setIsImgLoaded(false);
    }, [movie]);

    return (
        <div className="c-movie-description">
            <Button mode="primary" size="small" onClick={showSearchHeader}>search</Button>
            <div className={imgClassNames}>
                <img src={movie.poster_path} onLoad={handlePictLoad} alt={movie.title} />
            </div>
            <div className="c-movie-description__title">
                {movie.title}
                <span className="c-movie-description__rating">{movie.vote_average ? movie.vote_average : '-.-'}</span>
            </div>
            <div className="c-movie-description__genres">
                {movie.genres.join(' & ')}
            </div>
            <div className="c-movie-description__year">
                {movie.release_date?.split('-')[0]}
            </div>
            <div className="c-movie-description__info">
                {movie.overview ? movie.overview : '[no overview]'}
            </div>
        </div>
    );
}

MovieDescriptionHeader.propTypes = {
    movie: PropTypes.object.isRequired,
    showSearchHeader: PropTypes.func,
};
MovieDescriptionHeader.defaultProps = {
    showSearchHeader: null,
};

export default MovieDescriptionHeader;
