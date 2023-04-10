import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import Button from '../../components/button/button';
import ShowPortal from '../../components/showPortal/showPortal';
import MoviePopupForm from '../../components/moviePopupForm/moviePopupForm';
import { addMovie } from '../../store/actions';
import globalContext from '../../GlobalContext';
import Popup from '../../components/popup/popup';

function AddMoviePopupButton() {
    const initialValues = {
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
    const { hidePortal } = useContext(globalContext);
    const dispatch = useDispatch();
    const handleAddMovieSubmit = (values) => {
        dispatch(addMovie(values));
        hidePortal();
    };

    return (
        <ShowPortal
            content={(
                <Formik initialValues={initialValues} onSubmit={handleAddMovieSubmit}>
                    <Form>
                        <Popup>
                            <Popup.Header>Add movie</Popup.Header>
                            <Popup.Body>
                                <MoviePopupForm />
                            </Popup.Body>
                            <Popup.Footer isOnlyButtons>
                                <Button type="reset" mode="secondary" size="small">reset</Button>
                                <Button type="submit" mode="primary" size="small">submit</Button>
                            </Popup.Footer>
                        </Popup>
                    </Form>
                </Formik>
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
