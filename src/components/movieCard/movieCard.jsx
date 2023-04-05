import './movieCard.scss';
import React, {
    useState, useContext, useEffect, useRef,
} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ShowPortal from '../showPortal/showPortal';
import Button from '../button/button';
import MoviePopupForm from '../moviePopupForm/moviePopupForm';
import BaseLayoutContext from '../baseLayout/baseLayoutContext';
import { removeMovieSuccess, updateMovieSuccess } from '../../store/actions';
import globalContext from '../../GlobalContext';
import Popup from '../popup/popup';

function MovieCard(props) {
    const { data } = props;
    const {
        id, title, release_date, genres, poster_path,
    } = data;
    const [isOpenContextMenu, setOpenContextMenu] = useState(false);
    const [movieData, setMovieData] = useState(data);
    const { setMovieID } = useContext(BaseLayoutContext);
    const { hidePortal } = useContext(globalContext);
    const dispatch = useDispatch();
    const contextMenuClassNames = classNames('c-movie-card__context-menu', {
        'm-open': isOpenContextMenu,
    });
    const movieDataRef = useRef(data);

    const contextMenuToggleHandler = () => {
        setOpenContextMenu(!isOpenContextMenu);
    };

    const handleClickOnCard = () => {
        setMovieID(id);
    };

    const handleEditMovieClick = () => {
        dispatch(updateMovieSuccess(movieDataRef.current));
        hidePortal();
    };

    const handleRemoveMovieClick = () => {
        dispatch(removeMovieSuccess(id));
        hidePortal();
    };

    useEffect(() => {
        movieDataRef.current = movieData;
    }, [movieData]);

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
                <ShowPortal
                    content={(
                        <form>
                            <Popup>
                                <Popup.Header>Edit movie</Popup.Header>
                                <Popup.Body>
                                    <MoviePopupForm data={data} setMovieData={setMovieData} />
                                </Popup.Body>
                                <Popup.Footer isOnlyButtons>
                                    <Button type="reset" mode="secondary" size="small">reset</Button>
                                    <Button mode="primary" size="small" onClick={handleEditMovieClick}>submit</Button>
                                </Popup.Footer>
                            </Popup>
                        </form>
                    )}
                >
                    <button type="button" className="c-movie-card__context-menu-option">Edit</button>
                </ShowPortal>
                <ShowPortal
                    content={(
                        <Popup>
                            <Popup.Header>Delete movie</Popup.Header>
                            <Popup.Body>
                                Are you sure you want to delete this movie?
                            </Popup.Body>
                            <Popup.Footer isOnlyButtons>
                                <Button mode="primary" size="small" onClick={handleRemoveMovieClick}>confirm</Button>
                            </Popup.Footer>
                        </Popup>
                    )}
                >
                    <button type="button" className="c-movie-card__context-menu-option">Delete</button>
                </ShowPortal>
            </div>
            <div className="c-movie-card__img">
                <img src={poster_path} alt={title} />
            </div>
            <div className="c-movie-card__title" data-year={release_date?.split('-')[0]}>
                {title}
            </div>
            <div className="c-movie-card__genres">
                {genres.join(', ')}
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    data: PropTypes.exact({
        id: PropTypes.number,
        title: PropTypes.string,
        tagline: PropTypes.string,
        vote_average: PropTypes.number,
        vote_count: PropTypes.number,
        release_date: PropTypes.string,
        poster_path: PropTypes.string,
        overview: PropTypes.string,
        budget: PropTypes.number,
        revenue: PropTypes.number,
        genres: PropTypes.arrayOf(PropTypes.string),
        runtime: PropTypes.number,
    }),
};
MovieCard.defaultProps = {
    data: {
        id: 0,
        title: '[No title]',
        tagline: null,
        vote_average: null,
        vote_count: null,
        release_date: null,
        poster_path: 'https://via.placeholder.com/644x912.png?text=No+picture',
        overview: null,
        budget: null,
        revenue: null,
        genres: [],
        runtime: null,
    },
};

export default MovieCard;
