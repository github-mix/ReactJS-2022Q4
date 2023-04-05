import './portal.scss';
import React from 'react';
import PropTypes from 'prop-types';

function Portal(props) {
    const { isOpenPortal, setIsOpenPortal, portalContent } = props;

    if (!isOpenPortal) return false;

    return (
        <div className="c-portal">
            <div className="c-portal__window">
                <button
                    type="button"
                    className="c-portal__close-portal-button"
                    aria-label="Close window"
                    onClick={() => setIsOpenPortal(false)}
                />
                {portalContent.content}
            </div>
        </div>
    );
}

Portal.propTypes = {
    isOpenPortal: PropTypes.bool,
    setIsOpenPortal: PropTypes.func,
    portalContent: PropTypes.exact({
        content: PropTypes.node,
    }),
};

Portal.defaultProps = {
    isOpenPortal: false,
    setIsOpenPortal: null,
    portalContent: {
        content: null,
    },
};

export default Portal;
