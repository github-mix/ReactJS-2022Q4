import './checkbox.scss';
import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    const { children, defaultChecked } = props;

    return (
        <label className="c-checkbox">
            <input className="c-checkbox__input" type="checkbox" defaultChecked={defaultChecked} />
            <span className="c-checkbox__wrapper">{children}</span>
        </label>
    );
}

Checkbox.propTypes = {
    children: PropTypes.string,
    defaultChecked: PropTypes.bool,
};
Checkbox.defaultProps = {
    children: null,
    defaultChecked: false,
};

export default Checkbox;
