import React from 'react';
import PropTypes from 'prop-types';

function PopupBody(props) {
    const { children } = props;

    return <div className="c-popup__body">{children}</div>;
}

PopupBody.propTypes = {
    children: PropTypes.node,
};
PopupBody.defaultProps = {
    children: null,
};

export default PopupBody;
