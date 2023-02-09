import './popup.scss';
import React from 'react';
import PropTypes from 'prop-types';

function Popup(props) {
    const { isOpenPopup, setIsOpenPopup, popupContent } = props;

    if (!isOpenPopup) return false;

    return (
        <div className="c-popup">
            <div className="c-popup__window">
                <button
                    type="button"
                    className="c-popup__close-popup-button"
                    aria-label="Close popup"
                    onClick={() => setIsOpenPopup(false)}
                />
                <div className="c-popup__header">{popupContent.title}</div>
                <div className="c-popup__body">{popupContent.body}</div>
                {popupContent.footer && <div className="c-popup__footer">{popupContent.footer}</div>}
                {popupContent.actionsFooter && (
                    <div className="c-popup__footer m-has-only-buttons">
                        {popupContent.actionsFooter}
                    </div>
                )}
            </div>
        </div>
    );
}

Popup.propTypes = {
    isOpenPopup: PropTypes.bool,
    setIsOpenPopup: PropTypes.func,
    popupContent: PropTypes.exact({
        title: PropTypes.string,
        body: PropTypes.node,
        footer: PropTypes.node,
        actionsFooter: PropTypes.node,
    }),
};

Popup.defaultProps = {
    isOpenPopup: false,
    setIsOpenPopup: null,
    popupContent: {
        title: null,
        body: null,
        footer: null,
        actionsFooter: null,
    },
};

export default Popup;
