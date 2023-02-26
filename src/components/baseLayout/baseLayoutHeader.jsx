import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BaseLayoutContext from './baseLayoutContext';
import Logo from '../logo/logo';
import MovieDescriptionHeader from '../../page/movieDescriptionHeader/movieDescriptionHeader';

function BaseLayoutHeader(props) {
    const { children } = props;

    const { movieID, setMovieID } = useContext(BaseLayoutContext);

    const headerContent = () => {
        if (movieID) {
            const showSearchHeader = () => setMovieID(0);

            return <MovieDescriptionHeader movieID={movieID} showSearchHeader={showSearchHeader} />;
        }

        return children;
    };

    return (
        <header className="c-base-layout__header">
            <div className="c-base-layout__header-content">
                <Logo />
                {headerContent()}
            </div>
        </header>
    );
}

BaseLayoutHeader.propTypes = {
    children: PropTypes.node,
};
BaseLayoutHeader.defaultProps = {
    children: null,
};

export default BaseLayoutHeader;
