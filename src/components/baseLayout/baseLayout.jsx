import './baseLayout.scss';
import React from 'react';
import PropTypes from 'prop-types';
import BaseLayoutHeader from './baseLayoutHeader';
import BaseLayoutAside from './baseLayoutAside';
import BaseLayoutMain from './baseLayoutMain';
import BaseLayoutFooter from './baseLayoutFooter';

function BaseLayout(props) {
    const { children } = props;

    return <div className="c-base-layout">{children}</div>;
}

BaseLayout.propTypes = {
    children: PropTypes.node,
};
BaseLayout.defaultProps = {
    children: null,
};

BaseLayout.Header = BaseLayoutHeader;
BaseLayout.Aside = BaseLayoutAside;
BaseLayout.Main = BaseLayoutMain;
BaseLayout.Footer = BaseLayoutFooter;

export default BaseLayout;
