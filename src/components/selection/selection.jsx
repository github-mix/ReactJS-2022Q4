import './selection.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

function Selection(props) {
    const {
        children, name, label, handleChange,
    } = props;

    return (
        <label className="c-selection">
            <span className="c-selection__label">{label}</span>
            <Field name={name} as="select" onChange={handleChange}>
                <option value={-1} disabled>---</option>
                {children.map((optionName, index) => (
                    <option key={optionName} value={index}>{optionName}</option>
                ))}
            </Field>
        </label>
    );
}

Selection.propTypes = {
    children: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string,
    label: PropTypes.string,
    handleChange: PropTypes.func,
};
Selection.defaultProps = {
    children: null,
    name: null,
    label: null,
    handleChange: null,
};

export default Selection;
