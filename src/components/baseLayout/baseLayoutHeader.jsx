import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BaseLayoutContext from './baseLayoutContext';
import Logo from '../logo/logo';
import MovieDescriptionHeader from '../../page/movieDescriptionHeader/movieDescriptionHeader';

function BaseLayoutHeader(props) {
    const { children } = props;
    const { movieID, setMovieID } = useContext(BaseLayoutContext);
    const movies = useSelector((state) => state.moviesData.data);
    const movie = movies.find((item) => item.id === movieID);

    const headerContent = () => {
        if (movie) {
            const showSearchHeader = () => setMovieID(0);

            return <MovieDescriptionHeader movie={movie} showSearchHeader={showSearchHeader} />;
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
