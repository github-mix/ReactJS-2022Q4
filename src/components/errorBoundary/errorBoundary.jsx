import './errorBoundary.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function OopsText(props) {
    const { message } = props;

    return (
        <>
            <h2 className="c-oops-text">Oops, something went wrong...</h2>
            <p>
                <b>Error message:</b>
                {' '}
                {message}
            </p>
        </>
    );
}

OopsText.propTypes = {
    message: PropTypes.string,
};
OopsText.defaultProps = {
    message: null,
};

function ErrorBoundary(props) {
    const { children } = props;
    const errorMessage = useSelector((state) => state.error);

    return errorMessage ? <OopsText message={errorMessage} /> : children;
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
};
ErrorBoundary.defaultProps = {
    children: null,
};

export default ErrorBoundary;
