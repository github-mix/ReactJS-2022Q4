import React, { useState, useMemo } from 'react';
import { Provider } from 'react-redux';
import Page from './page/page';
import Portal from './components/portal/portal';
import GlobalContext from './GlobalContext';
import store from './store/store';

function App() {
    const [isOpenPortal, setIsOpenPortal] = useState(false);
    const [portalContent, setPortalContent] = useState(null);
    const showPortal = (content) => {
        setPortalContent(content);
        setIsOpenPortal(true);
    };
    const hidePortal = () => {
        setIsOpenPortal(false);
    };

    const memoizedGlobalSetting = useMemo(() => ({ showPortal, hidePortal }), []);

    return (
        <Provider store={store}>
            <GlobalContext.Provider value={memoizedGlobalSetting}>
                <Page />
                <Portal isOpenPortal={isOpenPortal} setIsOpenPortal={setIsOpenPortal} portalContent={portalContent} />
            </GlobalContext.Provider>
        </Provider>
    );
}

export default App;
