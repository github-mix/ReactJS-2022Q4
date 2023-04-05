import './genreToggleBar.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Selection from '../selection/selection';
import { GENRES, SORT_ORDER, SORTBY } from '../../globalConstants';
import { fetchMovies } from '../../store/actions';

function GenreToggleBar() {
    const dispatch = useDispatch();
    const [activeTabName, setActiveTabName] = useState(GENRES.ADVENTURE);
    const tabs = Object.values(GENRES);
    const sortOptions = [
        {
            name: '▲ Release Date',
            params: {
                sortBy: SORTBY.RELEASE_DATE,
                sortOrder: SORT_ORDER.ASC,
            },
        },
        {
            name: '▼ Release Date',
            params: {
                sortBy: SORTBY.RELEASE_DATE,
                sortOrder: SORT_ORDER.DESC,
            },
        },
        {
            name: '▲ Vote Average',
            params: {
                sortBy: SORTBY.VOTE_AVERAGE,
                sortOrder: SORT_ORDER.ASC,
            },
        },
        {
            name: '▼ Vote Average',
            params: {
                sortBy: SORTBY.VOTE_AVERAGE,
                sortOrder: SORT_ORDER.DESC,
            },
        },
    ];

    const handleClick = (newActiveTabName) => {
        setActiveTabName(newActiveTabName);
        dispatch(fetchMovies({ filter: newActiveTabName }));
    };

    const handleSelectChange = (e) => {
        dispatch(fetchMovies(sortOptions[e.target.value].params));
    };

    return (
        <div className="c-genre-toggle-bar">
            <div className="c-genre-toggle-bar__toggle">
                {tabs && tabs.map((buttonLabel) => (
                    <button
                        key={buttonLabel}
                        type="button"
                        className={`${activeTabName === buttonLabel ? 'm-active' : ''}`}
                        onClick={() => handleClick(buttonLabel)}
                    >
                        {buttonLabel}
                    </button>
                ))}
            </div>
            <div className="c-genre-toggle-bar__content-from-right">
                <Selection label="sort by" handleSelectChange={handleSelectChange}>
                    {sortOptions}
                </Selection>
            </div>
        </div>
    );
}

export default GenreToggleBar;
