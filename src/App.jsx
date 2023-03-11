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

    const memoizedGlobalSetting = useMemo(() => ({ showPopup }), []);

    return (
        <GlobalContext.Provider value={memoizedGlobalSetting}>
            <Page />
            <Popup isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} popupContent={popupContent} />
        </GlobalContext.Provider>
    );
}

export default App;
