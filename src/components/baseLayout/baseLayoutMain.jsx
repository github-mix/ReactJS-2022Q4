import React from 'react';
import PropTypes from 'prop-types';

function BaseLayoutMain(props) {
    const { children } = props;

    return <main className="c-base-layout__main">{children}</main>;
}

BaseLayoutMain.propTypes = {
    children: PropTypes.node,
};
BaseLayoutMain.defaultProps = {
    children: null,
};

export default BaseLayoutMain;
