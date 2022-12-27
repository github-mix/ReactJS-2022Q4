import './grid.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Grid(props) {
    const { children, gap } = props;
    const gridClassNames = classNames('c-grid', {
        'm-default-gap': gap === 'default',
    });

    return (
        <ul className={gridClassNames}>
            {children.map((item) => <li key={item.id}>{item.node}</li>)}
        </ul>
    );
}

Grid.propTypes = {
    children: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        node: PropTypes.node,
    })),
    gap: PropTypes.oneOf(['none', 'default']),
};
Grid.defaultProps = {
    children: null,
    gap: 'none',
};

export default Grid;
