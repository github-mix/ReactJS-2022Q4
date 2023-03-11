import './movieCard.scss';
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ShowPopup from '../showPopup/showPopup';
import Button from '../button/button';
import MoviePopupForm from '../moviePopupForm/moviePopupForm';
import BaseLayoutContext from '../baseLayout/baseLayoutContext';

function MovieCard(props) {
    const { movieID, data } = props;
    const {
        title, genres, year, pictUrl,
    } = data;
    const [isOpenContextMenu, setOpenContextMenu] = useState(false);
    const { setMovieID } = useContext(BaseLayoutContext);
    const contextMenuClassNames = classNames('c-movie-card__context-menu', {
        'm-open': isOpenContextMenu,
    });

    const contextMenuToggleHandler = () => {
        setOpenContextMenu(!isOpenContextMenu);
    };

    const handleClickOnCard = () => {
        setMovieID(movieID);
    };

    return (
        <div className="c-movie-card" onMouseLeave={() => { setOpenContextMenu(false); }}>
            <button
                type="button"
                aria-label="card"
                className="c-movie-card__clickable-area"
                onClick={handleClickOnCard}
            />
            <div className={contextMenuClassNames}>
                <button
                    type="button"
                    className="c-movie-card__context-menu-toggle"
                    title="Context menu"
                    aria-label="Context menu"
                    onClick={contextMenuToggleHandler}
                />
                <ShowPopup
                    title="Edit movie"
                    body={<MoviePopupForm data={data} />}
                    actionsFooter={(
                        <>
                            <Button mode="secondary" size="small">reset</Button>
                            <Button mode="primary" size="small">submit</Button>
                        </>
                    )}
                >
                    <button type="button" className="c-movie-card__context-menu-option">Edit</button>
                </ShowPopup>
                <ShowPopup
                    title="Delete movie"
                    body="Are you sure you want to delete this movie?"
                    actionsFooter={<Button mode="primary" size="small">confirm</Button>}
                >
                    <button type="button" className="c-movie-card__context-menu-option">Delete</button>
                </ShowPopup>
            </div>
            <div className="c-movie-card__img">
                <img src={pictUrl} alt={title} />
            </div>
            <div className="c-movie-card__title" data-year={year}>
                {title}
            </div>
            <div className="c-movie-card__genres">
                {Object.keys(genres).join(', ')}
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    movieID: PropTypes.string.isRequired,
    data: PropTypes.exact({
        title: PropTypes.string,
        date: PropTypes.string, // 'YYYY-MM-DD'
        pictUrl: PropTypes.string,
        rating: PropTypes.number,
        genres: PropTypes.objectOf(PropTypes.bool),
        year: PropTypes.number,
        overview: PropTypes.string,
    }),
};
MovieCard.defaultProps = {
    data: {
        title: '[No title]',
        date: null, // 'YYYY-MM-DD'
        pictUrl: 'https://via.placeholder.com/644x912.png?text=No+picture',
        rating: null,
        genres: {},
        year: null,
        overview: null,
    },
};

export default MovieCard;
