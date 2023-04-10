import './genreToggleBar.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import Selection from '../selection/selection';
import { GENRES, SORT_ORDER, SORTBY } from '../../globalConstants';
import { fetchMovies } from '../../store/actions';

function GenreToggleBar() {
    const dispatch = useDispatch();
    const outputParams = useSelector((state) => state.outputParams);
    const tabs = Object.values(GENRES);
    const sortOptions = [
        {
            id: 0,
            name: '▲ Release Date',
            params: {
                sortBy: SORTBY.RELEASE_DATE,
                sortOrder: SORT_ORDER.ASC,
            },
        },
        {
            id: 1,
            name: '▼ Release Date',
            params: {
                sortBy: SORTBY.RELEASE_DATE,
                sortOrder: SORT_ORDER.DESC,
            },
        },
        {
            id: 2,
            name: '▲ Vote Average',
            params: {
                sortBy: SORTBY.VOTE_AVERAGE,
                sortOrder: SORT_ORDER.ASC,
            },
        },
        {
            id: 3,
            name: '▼ Vote Average',
            params: {
                sortBy: SORTBY.VOTE_AVERAGE,
                sortOrder: SORT_ORDER.DESC,
            },
        },
    ];

    const getCurrentSelectedOption = () => {
        const checkFullMatch = (item) => {
            const isSortByEqual = item.params.sortBy === outputParams.sortBy;
            const isSortOrder = item.params.sortOrder === outputParams.sortOrder;

            return isSortByEqual && isSortOrder;
        };
        const index = sortOptions.find((item) => checkFullMatch(item)).id;

        return (index >= 0) ? index : -1;
    };

    const handleTabClick = (newActiveTabName) => {
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
                        className={`${outputParams.filter === buttonLabel ? 'm-active' : ''}`}
                        onClick={() => handleTabClick(buttonLabel)}
                    >
                        {buttonLabel}
                    </button>
                ))}
            </div>
            <div className="c-genre-toggle-bar__content-from-right">
                <Formik initialValues={{ selectedOption: getCurrentSelectedOption() }} onSubmit={null}>
                    {
                        ({ handleChange }) => (
                            <Selection
                                name="selectedOption"
                                handleChange={(e) => {
                                    handleChange(e);
                                    handleSelectChange(e);
                                }}
                            >
                                {sortOptions.map((item) => item.name)}
                            </Selection>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export default GenreToggleBar;
