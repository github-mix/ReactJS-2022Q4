import './searchHeader.scss';
import React from 'react';
import AddMoviePopupButton from '../addMoviePopupButton/AddMoviePopupButton';
import Input from '../../components/input/input';
import Button from '../../components/button/button';

function SearchHeader() {
    return (
        <div className="c-search-header">
            <h1 className="c-search-header__title">FIND YOUR MOVIE</h1>
            <AddMoviePopupButton />
            <div className="c-flex m-gap-3">
                <div className="c-flex__cell m-grow-1">
                    <Input isFullWidth placeholder="What do you want to watch?" />
                </div>
                <Button mode="primary">search</Button>
            </div>
        </div>
    );
}

export default SearchHeader;
