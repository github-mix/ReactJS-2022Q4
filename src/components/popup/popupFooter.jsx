import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function PopupFooter(props) {
    const { children, isOnlyButtons } = props;
    const footerClassNames = classNames('c-popup__footer', {
        'm-has-only-buttons': isOnlyButtons,
    });

    return <div className={footerClassNames}>{children}</div>;
}

PopupFooter.propTypes = {
    children: PropTypes.node,
    isOnlyButtons: PropTypes.bool,
};
PopupFooter.defaultProps = {
    children: null,
    isOnlyButtons: false,
};

export default PopupFooter;
