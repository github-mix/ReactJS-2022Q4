import React from 'react';
import PropTypes from 'prop-types';
import BaseField from '../baseField/baseField';

function Textarea(props) {
    const {
        label, placeholder, children, isFullWidth,
    } = props;

    return (
        <BaseField label={label} isFullWidth={isFullWidth}>
            <textarea placeholder={placeholder} defaultValue={children} />
        </BaseField>
    );
}

Textarea.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.string,
    isFullWidth: PropTypes.bool,
};
Textarea.defaultProps = {
    label: null,
    placeholder: null,
    children: null,
    isFullWidth: false,
};

export default Textarea;
