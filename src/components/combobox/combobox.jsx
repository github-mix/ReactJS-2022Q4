import './combobox.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BaseField from '../baseField/baseField';

function Combobox(props) {
    const { label, children, isFullWidth } = props;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <BaseField label={label} isFullWidth={isFullWidth}>
            <input
                className={`${isDropdownOpen ? 'm-open' : ''}`}
                type="combobox"
                defaultValue="Select Genre"
                readOnly
                onClick={handleClick}
            />
            <span className={`c-combobox-dropdown ${isDropdownOpen ? 'm-open' : ''}`}>
                {children}
            </span>
        </BaseField>
    );
}

Combobox.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node,
    isFullWidth: PropTypes.bool,
};
Combobox.defaultProps = {
    label: null,
    children: 'Empty dropdown',
    isFullWidth: false,
};

export default Combobox;
