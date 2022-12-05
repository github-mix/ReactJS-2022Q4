import './baseField.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function BaseField(props) {
    const { children, label, isFullWidth } = props;
    const baseFieldClasses = classNames('c-base-field', {
        'm-full-width': isFullWidth,
        'm-select': children.type === 'select',
        'm-textarea': children.type === 'textarea',
    });

    return (
        <label className={baseFieldClasses}>
            {!!label && <span className="c-base-field__label">{label}</span>}
            <span className="c-base-field__input">{children}</span>
        </label>
    );
}

BaseField.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
    isFullWidth: PropTypes.bool,
};
BaseField.defaultProps = {
    children: 'It should be <input> or <select> here',
    label: '',
    isFullWidth: false,
};

export default BaseField;
