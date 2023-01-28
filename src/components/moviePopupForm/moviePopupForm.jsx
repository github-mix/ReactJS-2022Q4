import './moviePopupForm.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/input';
import Textarea from '../textarea/textarea';
import Combobox from '../combobox/combobox';
import Checkbox from '../checkbox/checkbox';
import { GENRES } from '../../globalConstants';

function MoviePopupForm(props) {
    const { data } = props;
    const renderCheckboxes = () => Object.keys(GENRES).map((key) => (
        <Checkbox key={GENRES[key]} defaultChecked={data.genres[GENRES[key]]}>{GENRES[key]}</Checkbox>
    ));

    return (
        <div className="c-movie-popup-form">
            <Input type="text" label="Title" value={data.title} />
            <Input type="date" label="Release date" placeholder="Select Date" value={data.date} />
            <Input type="text" label="Movie url" placeholder="https://" value={data.pictUrl} />
            <Input type="number" label="Rating" placeholder="7.8" value={data.rating} />
            <Combobox label="Genre">
                <div className="c-flex m-column m-gap-2">
                    {renderCheckboxes()}
                </div>
            </Combobox>
            <Input type="number" label="Year" placeholder="XXXX" value={data.year} />
            <Textarea label="Overview" isFullWidth placeholder="Movie description">
                {data.overview}
            </Textarea>
        </div>
    );
}

MoviePopupForm.propTypes = {
    data: PropTypes.exact({
        id: PropTypes.number,
        title: PropTypes.string,
        date: PropTypes.string, // 'YYYY-MM-DD'
        pictUrl: PropTypes.string,
        rating: PropTypes.number,
        genres: PropTypes.objectOf(PropTypes.bool),
        year: PropTypes.number,
        overview: PropTypes.string,
    }),
};
MoviePopupForm.defaultProps = {
    data: {
        id: null,
        title: null,
        date: null,
        pictUrl: null,
        rating: null,
        genres: {}, // for example [GENRES.COMEDY]: true,
        year: null,
        overview: null,
    },
};

export default MoviePopupForm;
