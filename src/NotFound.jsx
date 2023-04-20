import React from 'react';
import { Link } from 'react-router-dom';
import BaseLayout from './components/baseLayout/baseLayout';

function NotFound() {
    return (
        <BaseLayout>
            <BaseLayout.Header />
            <BaseLayout.Main>
                <h1>Requested page not found</h1>
                <Link to="/">Go to the main page</Link>
            </BaseLayout.Main>
        </BaseLayout>
    );
}

export default NotFound;
