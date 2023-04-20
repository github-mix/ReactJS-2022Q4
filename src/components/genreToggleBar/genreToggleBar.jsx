import './genreToggleBar.scss';
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import Selection from '../selection/selection';
import {
    GENRES, OUTPUT_PARAMS, SORT_ORDER, SORT_BY,
} from '../../globalConstants';

function GenreToggleBar() {
    const formikContext = {};
    const [searchParams, setSearchParams] = useSearchParams();
    const outputParams = {
        [OUTPUT_PARAMS.FILTER]: searchParams.get(OUTPUT_PARAMS.FILTER),
        [OUTPUT_PARAMS.SORT_BY]: searchParams.get(OUTPUT_PARAMS.SORT_BY),
        [OUTPUT_PARAMS.SORT_ORDER]: searchParams.get(OUTPUT_PARAMS.SORT_ORDER),
    };
    const tabs = Object.values(GENRES);
    const sortOptions = [
        {
            id: 0,
            name: '▲ Release Date',
            params: {
                sortBy: SORT_BY.RELEASE_DATE,
                sortOrder: SORT_ORDER.ASC,
            },
        },
        {
            id: 1,
            name: '▼ Release Date',
            params: {
                sortBy: SORT_BY.RELEASE_DATE,
                sortOrder: SORT_ORDER.DESC,
            },
        },
        {
            id: 2,
            name: '▲ Vote Average',
            params: {
                sortBy: SORT_BY.VOTE_AVERAGE,
                sortOrder: SORT_ORDER.ASC,
            },
        },
        {
            id: 3,
            name: '▼ Vote Average',
            params: {
                sortBy: SORT_BY.VOTE_AVERAGE,
                sortOrder: SORT_ORDER.DESC,
            },
        },
    ];

    const getCurrentSelectedOption = () => {
        const checkFullMatch = (item) => {
            const isSortByEqual = item.params[OUTPUT_PARAMS.SORT_BY] === outputParams[OUTPUT_PARAMS.SORT_BY];
            const isSortOrder = item.params[OUTPUT_PARAMS.SORT_ORDER] === outputParams[OUTPUT_PARAMS.SORT_ORDER];

            return isSortByEqual && isSortOrder;
        };
        const index = sortOptions.find((item) => checkFullMatch(item))?.id;

        return (index >= 0) ? index : -1;
    };

    const initialValues = { sortSelection: getCurrentSelectedOption() };

    const handleTabClick = (newActiveTabName) => {
        setSearchParams({
            [OUTPUT_PARAMS.FILTER]: newActiveTabName,
        });
    };

    const handleSelectChange = (e) => {
        setSearchParams({ ...outputParams, ...sortOptions[e.target.value].params });
    };

    useEffect(() => {
        formikContext?.setFieldValue('sortSelection', getCurrentSelectedOption());
    }, [outputParams[OUTPUT_PARAMS.SORT_BY], outputParams[OUTPUT_PARAMS.SORT_ORDER]]);

    return (
        <div className="c-genre-toggle-bar">
            <div className="c-genre-toggle-bar__toggle">
                {tabs && tabs.map((buttonLabel) => {
                    const isActive = searchParams.get(OUTPUT_PARAMS.FILTER) === buttonLabel;

                    return (
                        <button
                            key={buttonLabel}
                            type="button"
                            className={`${isActive ? 'm-active' : ''}`}
                            onClick={() => handleTabClick(buttonLabel)}
                        >
                            {buttonLabel}
                        </button>
                    );
                })}
            </div>
            <div className="c-genre-toggle-bar__content-from-right">
                <Formik initialValues={initialValues} onSubmit={null}>
                    {
                        ({ handleChange, setFieldValue }) => {
                            formikContext.setFieldValue = setFieldValue;

                            return (
                                <Selection
                                    name="sortSelection"
                                    handleChange={(e) => {
                                        handleChange(e);
                                        handleSelectChange(e);
                                    }}
                                >
                                    {sortOptions.map((item) => item.name)}
                                </Selection>
                            );
                        }
                    }
                </Formik>
            </div>
        </div>
    );
}

export default GenreToggleBar;
