import './moviePopupForm.scss';
import React from 'react';
import Input from '../input/input';
import Textarea from '../textarea/textarea';
import Combobox from '../combobox/combobox';
import Checkbox from '../checkbox/checkbox';
import { GENRES } from '../../globalConstants';

function MoviePopupForm() {
    return (
        <div className="c-movie-popup-form">
            <Input
                name="title"
                type="text"
                label="Title"
            />
            <Input
                name="release_date"
                type="date"
                label="Release date"
                placeholder="Select Date"
            />
            <Input
                name="poster_path"
                type="text"
                label="Movie url"
                placeholder="https://"
            />
            <Input
                name="vote_average"
                type="number"
                label="Rating"
                placeholder="7.8"
            />
            <Combobox label="Genre">
                <div className="c-flex m-column m-gap-2">
                    {Object.keys(GENRES).map((key) => (
                        <Checkbox
                            key={GENRES[key]}
                            name="genres"
                            value={GENRES[key]}
                        >
                            {GENRES[key]}
                        </Checkbox>
                    ))}
                </div>
            </Combobox>
            <Input
                name="runtime"
                type="number"
                label="Runtime"
                requied
            />
            <Textarea
                name="overview"
                label="Overview"
                isFullWidth
                placeholder="Movie description"
            />
        </div>
    );
}

export default MoviePopupForm;
