import React from 'react';
import PropTypes from 'prop-types';

function PopupHeader(props) {
    const { children } = props;

    return <div className="c-popup__header">{children}</div>;
}

PopupHeader.propTypes = {
    children: PropTypes.node,
};
PopupHeader.defaultProps = {
    children: null,
};

export default PopupHeader;
