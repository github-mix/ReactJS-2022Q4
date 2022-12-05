import './genreToggleBar.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Selection from '../selection/selection';

function GenreToggleBar(props) {
    const { tabs, sortOptions } = props;
    const [activeTabNumber, setActiveTabNumber] = useState(0);

    const handleClick = (index) => {
        setActiveTabNumber(index);
    };

    return (
        <div className="c-genre-toggle-bar">
            <div className="c-genre-toggle-bar__toggle">
                {tabs && tabs.map((buttonLabel, index) => (
                    <button
                        key={buttonLabel}
                        type="button"
                        className={`${activeTabNumber === index ? 'm-active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {buttonLabel}
                    </button>
                ))}
            </div>
            {sortOptions && (
                <div className="c-genre-toggle-bar__content-from-right">
                    <Selection label="sort by">
                        {sortOptions}
                    </Selection>
                </div>
            )}
        </div>
    );
}

GenreToggleBar.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string),
    sortOptions: PropTypes.arrayOf(PropTypes.string),
};
GenreToggleBar.defaultProps = {
    tabs: null,
    sortOptions: null,
};

export default GenreToggleBar;
