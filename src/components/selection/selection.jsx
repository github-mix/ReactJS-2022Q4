import './selection.scss';
import React from 'react';
import PropTypes from 'prop-types';

function Selection(props) {
    const {
        children, label, selectedIndex, handleSelectChange,
    } = props;

    return (
        <label className="c-selection">
            <span className="c-selection__label">{label}</span>
            <select onChange={handleSelectChange} defaultValue={selectedIndex}>
                <option value={-1} disabled>---</option>
                {children.map((option, index) => (
                    <option key={option.name} value={index}>{option.name}</option>
                ))}
            </select>
        </label>
    );
}

Selection.propTypes = {
    children: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
    })),
    label: PropTypes.string,
    selectedIndex: PropTypes.number,
    handleSelectChange: PropTypes.func,
};
Selection.defaultProps = {
    children: null,
    label: null,
    selectedIndex: -1,
    handleSelectChange: null,
};

export default Selection;
