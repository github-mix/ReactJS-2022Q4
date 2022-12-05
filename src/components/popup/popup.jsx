import './popup.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button/button';

function Popup(props) {
    const {
        title, body, footer,
    } = props;
    const isOnlyButtonsInFooter = footer.props.children.every((node) => node.type && node.type.name === 'Button');
    const [isOpenPopup, setIsOpenPopup] = useState(false);

    const openPopup = () => {
        setIsOpenPopup(true);
    };
    const closePopup = () => {
        setIsOpenPopup(false);
    };

    const footerClassNames = classNames('c-popup__footer', {
        'm-has-only-buttons': isOnlyButtonsInFooter,
    });

    return (
        <>
            {/* TODO: Question: How to wrap any button which will open the popup? */}
            <Button onClick={openPopup}>Popup</Button>
            {/* TODO: Question: How to create global state in order to toggle "m-open-popup" on <body>? */}
            {isOpenPopup && (
                <div className="c-popup">
                    <div className="c-popup__window">
                        <button
                            type="button"
                            className="c-popup__close-popup-button"
                            aria-label="Close popup"
                            onClick={closePopup}
                        />
                        <div className="c-popup__header">{title}</div>
                        <div className="c-popup__body">{body}</div>
                        <div className={footerClassNames}>{footer}</div>
                    </div>
                </div>
            )}
        </>
    );
}

Popup.propTypes = {
    title: PropTypes.string,
    body: PropTypes.node,
    footer: PropTypes.node,
};
Popup.defaultProps = {
    title: '[No title]',
    body: null,
    footer: null,
};

export default Popup;
