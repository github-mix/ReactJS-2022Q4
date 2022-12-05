import React from 'react';
import PropTypes from 'prop-types';

function BaseLayoutHeader(props) {
    const { children, title } = props;

    return (
        <header className="c-base-layout__header">
            <div className="c-base-layout__header-content">
                {title && (<h1 className="c-base-layout__header-title">{title}</h1>)}
                {children}
            </div>
        </header>
    );
}

BaseLayoutHeader.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
};
BaseLayoutHeader.defaultProps = {
    children: null,
    title: null,
};

export default BaseLayoutHeader;
