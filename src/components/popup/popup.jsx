import './popup.scss';
import React from 'react';
import PropTypes from 'prop-types';
import PopupHeader from './popupHeader';
import PopupBody from './popupBody';
import PopupFooter from './popupFooter';

function Popup(props) {
    const { children } = props;

    return <div className="c-popup">{children}</div>;
}

Popup.propTypes = {
    children: PropTypes.node,
};
Popup.defaultProps = {
    children: null,
};

Popup.Header = PopupHeader;
Popup.Body = PopupBody;
Popup.Footer = PopupFooter;

export default Popup;
