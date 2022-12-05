import React from 'react';
import PropTypes from 'prop-types';

function BaseLayoutAside(props) {
    const { children } = props;

    return <aside className="c-base-layout__aside">{children}</aside>;
}

BaseLayoutAside.propTypes = {
    children: PropTypes.node,
};
BaseLayoutAside.defaultProps = {
    children: null,
};

export default BaseLayoutAside;
