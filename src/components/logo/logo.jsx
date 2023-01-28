import './logo.scss';
import React, { useContext } from 'react';
import GlobalContext from '../../GlobalContext';

function Logo() {
    const { testGlobalContextFromMovieCard } = useContext(GlobalContext);
    testGlobalContextFromMovieCard('message of logo');

    return <div className="c-logo" />;
}

export default Logo;
