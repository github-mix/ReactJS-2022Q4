import React from 'react';
import Button from '../../components/button/button';
import ShowPopup from '../../components/showPopup/showPopup';
import MoviePopupForm from '../../components/moviePopupForm/moviePopupForm';

function AddMoviePopupButton() {
    return (
        <ShowPopup
            title="Add movie"
            body={<MoviePopupForm />}
            actionsFooter={(
                <>
                    <Button mode="secondary" size="small">reset</Button>
                    <Button mode="primary" size="small">submit</Button>
                </>
            )}
        >
            <Button mode="transparent" size="small">
                +
                <span className="u-only-desktop"> add movie</span>
            </Button>
        </ShowPopup>
    );
}

export default AddMoviePopupButton;
