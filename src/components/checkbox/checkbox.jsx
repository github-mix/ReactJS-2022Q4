import './checkbox.scss';
import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    const { children, defaultChecked, onChange } = props;

    return (
        <label className="c-checkbox">
            <input className="c-checkbox__input" type="checkbox" defaultChecked={defaultChecked} onChange={onChange} />
            <span className="c-checkbox__wrapper">{children}</span>
        </label>
    );
}

Checkbox.propTypes = {
    children: PropTypes.string,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
};
Checkbox.defaultProps = {
    children: null,
    defaultChecked: false,
    onChange: null,
};

export default Checkbox;
