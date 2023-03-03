import React, { useState, useMemo } from 'react';
import Page from './page/page';
import Popup from './components/popup/popup';
import GlobalContext from './GlobalContext';

function App() {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [popupContent, setPopupContent] = useState(null);
    const showPopup = (content) => {
        setPopupContent(content);
        setIsOpenPopup(true);
    };

    const testGlobalContextFromMovieCard = (msg) => {
        // eslint-disable-next-line no-console
        console.warn('Catch the message from App.js:', msg);
    };

    const memoizedPopupSetting = useMemo(() => ({ showPopup, testGlobalContextFromMovieCard }), []);

    return (
        <GlobalContext.Provider value={memoizedPopupSetting}>
            <Page />
            111111111
            <Popup isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} popupContent={popupContent} />
        </GlobalContext.Provider>
    );
}

export default App;
