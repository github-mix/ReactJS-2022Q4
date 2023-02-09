import React from 'react';
import PropTypes from 'prop-types';
import BaseField from '../baseField/baseField';

function Input(props) {
    const {
        type, label, placeholder, value, isFullWidth,
    } = props;

    return (
        <BaseField label={label} isFullWidth={isFullWidth}>
            <input type={type} defaultValue={value} placeholder={placeholder} />
        </BaseField>
    );
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'date', 'password']),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    isFullWidth: PropTypes.bool,
};
Input.defaultProps = {
    type: 'text',
    label: null,
    placeholder: null,
    value: null,
    isFullWidth: false,
};

export default Input;
