import React from 'react';
import PropTypes from 'prop-types';

function BaseLayoutFooter(props) {
    const { children } = props;

    return <footer className="c-base-layout__footer">{children}</footer>;
}

BaseLayoutFooter.propTypes = {
    children: PropTypes.node,
};
BaseLayoutFooter.defaultProps = {
    children: null,
};

export default BaseLayoutFooter;
