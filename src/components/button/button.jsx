import './button.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button(props) {
    const {
        children, type, mode, size, onClick, myRef,
    } = props;
    const className = classNames('c-button', {
        'm-primary': mode === 'primary',
        'm-secondary': mode === 'secondary',
        'm-transparent': mode === 'transparent',
        'm-small': size === 'small',
    });

    return <button ref={myRef} type={type} className={className} onClick={onClick}>{children}</button>;
}

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    mode: PropTypes.oneOf(['default', 'primary', 'secondary', 'transparent']),
    size: PropTypes.oneOf(['default', 'small']),
    onClick: PropTypes.func,
    myRef: PropTypes.exact({ current: PropTypes.element }),
};
Button.defaultProps = {
    children: null,
    type: 'button',
    mode: 'default',
    size: 'default',
    onClick: null,
    myRef: null,
};

export default Button;
