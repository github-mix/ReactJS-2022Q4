import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import BaseField from '../baseField/baseField';

function Textarea(props) {
    const {
        name, label, placeholder, isFullWidth,
    } = props;

    return (
        <BaseField label={label} isFullWidth={isFullWidth}>
            <Field name={name} as="textarea" placeholder={placeholder} />
        </BaseField>
    );
}

Textarea.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isFullWidth: PropTypes.bool,
};
Textarea.defaultProps = {
    name: null,
    label: null,
    placeholder: null,
    isFullWidth: false,
};

export default Textarea;
