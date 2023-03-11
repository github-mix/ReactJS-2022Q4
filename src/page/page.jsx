import React, { useMemo, useState } from 'react';
import BaseLayout from '../components/baseLayout/baseLayout';
import Logo from '../components/logo/logo';
import GenreToggleBar from '../components/genreToggleBar/genreToggleBar';
import ErrorBoundary from '../components/errorBoundary/errorBoundary';
import MovieCardsGrid from '../components/movieCardsGrid/movieCardsGrid';
import movies from '../mock/movies';
import { GENRES } from '../globalConstants';
import BaseLayoutContext from '../components/baseLayout/baseLayoutContext';
import SearchHeader from './searchHeader/searchHeader';

function Page() {
    const [movieID, setMovieID] = useState(0);
    const memoizedmovieIDValue = useMemo(() => ({ movieID, setMovieID }), [movieID]);

    return (
        <BaseLayoutContext.Provider value={memoizedmovieIDValue}>
            <BaseLayout>
                <BaseLayout.Header>
                    <SearchHeader />
                </BaseLayout.Header>
                <BaseLayout.Aside>
                    <GenreToggleBar
                        tabs={Object.keys(GENRES)}
                        sortOptions={['Option 1', 'Option 2', 'Option 3']}
                    />
                </BaseLayout.Aside>
                <BaseLayout.Main>
                    <ErrorBoundary>
                        <MovieCardsGrid>
                            {movies}
                        </MovieCardsGrid>
                    </ErrorBoundary>
                </BaseLayout.Main>
                <BaseLayout.Footer>
                    <Logo />
                </BaseLayout.Footer>
            </BaseLayout>
        </BaseLayoutContext.Provider>
    );
}

export default Page;
