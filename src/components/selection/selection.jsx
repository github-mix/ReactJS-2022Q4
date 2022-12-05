import './selection.scss';
import React from 'react';
import PropTypes from 'prop-types';

function Selection(props) {
    const { children, label } = props;

    return (
        <label className="c-selection">
            <span className="c-selection__label">{label}</span>
            <select>
                {children.map((optionName) => (
                    <option key={optionName}>{optionName}</option>
                ))}
            </select>
        </label>
    );
}

Selection.propTypes = {
    children: PropTypes.arrayOf(PropTypes.string),
    label: PropTypes.string,
};
Selection.defaultProps = {
    children: null,
    label: null,
};

export default Selection;
