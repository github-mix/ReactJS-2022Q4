import './movieCard.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function MovieCard(props) {
    const {
        title, genres, year, pictUrl,
    } = props;
    const [isOpenContextMenu, setOpenContextMenu] = useState(false);
    const contextMenuClassNames = classNames('c-movie-card__context-menu', {
        'm-open': isOpenContextMenu,
    });

    const contextMenuToggleHandler = () => {
        setOpenContextMenu(!isOpenContextMenu);
    };

    return (
        <div className="c-movie-card" onMouseLeave={() => { setOpenContextMenu(false); }}>
            <div className={contextMenuClassNames}>
                <button
                    type="button"
                    className="c-movie-card__context-menu-toggle"
                    title="Context menu"
                    aria-label="Context menu"
                    onClick={contextMenuToggleHandler}
                />
                <button type="button" className="c-movie-card__context-menu-option">Edit</button>
                <button type="button" className="c-movie-card__context-menu-option">Delete</button>
            </div>
            <div className="c-movie-card__img">
                <img src={pictUrl} alt={title} />
            </div>
            <div className="c-movie-card__title" data-year={year}>
                {title}
            </div>
            <div className="c-movie-card__genres">
                {genres.join(', ')}
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    year: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    pictUrl: PropTypes.string,
};
MovieCard.defaultProps = {
    title: '[No title]',
    genres: ['[No genre]'],
    year: '----',
    pictUrl: 'https://via.placeholder.com/644x912.png?text=No+picture',
};

export default MovieCard;
