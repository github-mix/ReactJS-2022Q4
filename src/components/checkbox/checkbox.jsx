import './checkbox.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

function Checkbox(props) {
    const { children, name, value } = props;

    return (
        <label className="c-checkbox">
            <Field name={name} type="checkbox" className="c-checkbox__input" value={value} />
            <span className="c-checkbox__wrapper">{children}</span>
        </label>
    );
}

Checkbox.propTypes = {
    children: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
};
Checkbox.defaultProps = {
    children: null,
    name: null,
    value: null,
};

export default Checkbox;
