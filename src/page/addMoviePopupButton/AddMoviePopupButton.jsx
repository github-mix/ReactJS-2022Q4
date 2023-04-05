import React, {
    useContext, useEffect, useRef, useState,
} from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/button/button';
import ShowPortal from '../../components/showPortal/showPortal';
import MoviePopupForm from '../../components/moviePopupForm/moviePopupForm';
import { addMovieSuccess } from '../../store/actions';
import globalContext from '../../GlobalContext';
import Popup from '../../components/popup/popup';

function AddMoviePopupButton() {
    const emptyData = {
        title: '',
        tagline: '',
        vote_average: 0,
        vote_count: 0,
        release_date: '',
        poster_path: '',
        overview: '',
        budget: 0,
        revenue: 0,
        genres: [],
        runtime: 0,
    };
    const [movieData, setMovieData] = useState(emptyData);
    const { hidePortal } = useContext(globalContext);
    const movieDataRef = useRef(emptyData);
    const dispatch = useDispatch();
    const handleAddMovieClick = () => {
        dispatch(addMovieSuccess(movieDataRef.current));
        hidePortal();
    };

    useEffect(() => {
        movieDataRef.current = movieData;
    }, [movieData]);

    return (
        <ShowPortal
            content={(
                <form>
                    <Popup>
                        <Popup.Header>Add movie</Popup.Header>
                        <Popup.Body>
                            <MoviePopupForm data={movieData} setMovieData={setMovieData} />
                        </Popup.Body>
                        <Popup.Footer isOnlyButtons>
                            <Button type="reset" mode="secondary" size="small">reset</Button>
                            <Button mode="primary" size="small" onClick={handleAddMovieClick}>submit</Button>
                        </Popup.Footer>
                    </Popup>
                </form>
            )}
        >
            <Button mode="transparent" size="small">
                +
                <span className="u-only-desktop"> add movie</span>
            </Button>
        </ShowPortal>
    );
}

export default AddMoviePopupButton;
