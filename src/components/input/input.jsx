import React from 'react';
import PropTypes from 'prop-types';
import BaseField from '../baseField/baseField';

function Input(props) {
    const {
        type, label, placeholder, value, isFullWidth, readonly, onChange,
    } = props;

    return (
        <BaseField label={label} isFullWidth={isFullWidth}>
            <input type={type} defaultValue={value} placeholder={placeholder} readOnly={readonly} onChange={onChange} />
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
    readonly: PropTypes.bool,
    onChange: PropTypes.func,
};
Input.defaultProps = {
    type: 'text',
    label: null,
    placeholder: null,
    value: null,
    isFullWidth: false,
    readonly: false,
    onChange: null,
};

export default Input;
