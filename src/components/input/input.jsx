import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import BaseField from '../baseField/baseField';

function Input(props) {
    const {
        name, type, label, placeholder, isFullWidth, readonly,
    } = props;

    return (
        <BaseField label={label} isFullWidth={isFullWidth}>
            <Field name={name} type={type} placeholder={placeholder} readOnly={readonly} />
        </BaseField>
    );
}

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'date', 'password']),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isFullWidth: PropTypes.bool,
    readonly: PropTypes.bool,
};
Input.defaultProps = {
    name: null,
    type: 'text',
    label: null,
    placeholder: null,
    isFullWidth: false,
    readonly: false,
};

export default Input;
