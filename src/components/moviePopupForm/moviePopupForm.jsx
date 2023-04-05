import './moviePopupForm.scss';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../input/input';
import Textarea from '../textarea/textarea';
import Combobox from '../combobox/combobox';
import Checkbox from '../checkbox/checkbox';
import { GENRES } from '../../globalConstants';

function MoviePopupForm(props) {
    const { data, setMovieData } = props;
    const dataRef = useRef(data);
    const changeFieldValue = (e, propName, value = e.target.value) => {
        dataRef.current = { ...dataRef.current, [propName]: value };

        setMovieData(dataRef.current);
    };
    const changeCheckboxValue = (e, genre) => {
        const newGenres = (e.target.checked)
            ? [...dataRef.current.genres, genre.toLowerCase()]
            : dataRef.current.genres.filter((item) => item.toLowerCase() !== genre.toLowerCase());

        dataRef.current = {
            ...dataRef.current,
            genres: newGenres,
        };

        setMovieData(dataRef.current);
    };
    const renderCheckboxes = () => {
        const genresObj = data.genres.reduce((obj, key) => ({ ...obj, [key.toLowerCase()]: true }), {});

        return Object.keys(GENRES).map((key) => (
            <Checkbox
                key={GENRES[key]}
                defaultChecked={genresObj[GENRES[key]]}
                onChange={(e) => changeCheckboxValue(e, key)}
            >
                {GENRES[key]}
            </Checkbox>
        ));
    };

    useEffect(() => {
        dataRef.current = data;
    }, [data]);

    return (
        <div className="c-movie-popup-form">
            <Input
                type="text"
                label="Title"
                value={data.title}
                onChange={(e) => changeFieldValue(e, 'title')}
            />
            <Input
                type="date"
                label="Release date"
                placeholder="Select Date"
                value={data.release_date}
                onChange={(e) => changeFieldValue(e, 'release_date')}
            />
            <Input
                type="text"
                label="Movie url"
                placeholder="https://"
                value={data.poster_path}
                onChange={(e) => changeFieldValue(e, 'poster_path')}
            />
            <Input
                type="number"
                label="Rating"
                placeholder="7.8"
                value={data.vote_average}
                onChange={(e) => changeFieldValue(e, 'vote_average', +e.target.value)}
            />
            <Combobox label="Genre">
                <div className="c-flex m-column m-gap-2">
                    {renderCheckboxes()}
                </div>
            </Combobox>
            <Input
                type="number"
                label="Year"
                placeholder="XXXX"
                readonly
                value={data.release_date?.split('-')[0]}
            />
            <Textarea
                label="Overview"
                isFullWidth
                placeholder="Movie description"
                onChange={(e) => changeFieldValue(e, 'overview')}
            >
                {data.overview}
            </Textarea>
        </div>
    );
}

MoviePopupForm.propTypes = {
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
    setMovieData: PropTypes.func,
};
MoviePopupForm.defaultProps = {
    data: {
        id: null,
        title: null,
        tagline: null,
        vote_average: null,
        vote_count: null,
        release_date: null,
        poster_path: null,
        overview: null,
        budget: null,
        revenue: null,
        genres: [],
        runtime: null,
    },
    setMovieData: null,
};

export default MoviePopupForm;
