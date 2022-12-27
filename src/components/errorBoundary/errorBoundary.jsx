import './errorBoundary.scss';
import React from 'react';
import PropTypes from 'prop-types';

function OopsText() {
    return <h2 className="c-oops-text">Oops, something went wrong...</h2>;
}

function ErrorBoundary(props) {
    const { children } = props;

    const isEverythingOK = true;

    return isEverythingOK ? children : <OopsText />;
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
};
ErrorBoundary.defaultProps = {
    children: null,
};

export default ErrorBoundary;
