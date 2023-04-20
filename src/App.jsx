import React, { useState, useMemo } from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import Page from './page/page';
import Portal from './components/portal/portal';
import GlobalContext from './GlobalContext';
import store from './store/store';
import Showcase from './Showcase';
import NotFound from './NotFound';

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
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="search" />} />
                        <Route path="search" element={<Page />}>
                            <Route path=":searchQuery" element={<Page />} />
                        </Route>
                        <Route path="showcase" element={<Showcase />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
                <Portal isOpenPortal={isOpenPortal} setIsOpenPortal={setIsOpenPortal} portalContent={portalContent} />
            </GlobalContext.Provider>
        </Provider>
    );
}

export default App;
