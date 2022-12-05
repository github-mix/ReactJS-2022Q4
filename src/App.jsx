import React from 'react';
import BaseLayout from './components/baseLayout/baseLayout';
import Logo from './components/logo/logo';
import Button from './components/button/button';
import Input from './components/input/input';
import GenreToggleBar from './components/genreToggleBar/genreToggleBar';
import MovieCardsGrid from './components/movieCardsGrid/movieCardsGrid';
import movies from './mock/movies';
import ErrorBoundary from './components/errorBoundary/errorBoundary';

function App() {
    return (
        <BaseLayout>
            <BaseLayout.Header title="FIND YOUR MOViE">
                <Logo />
                <Button mode="transparent" size="small">
                    +
                    <span className="u-only-desktop"> add movie</span>
                </Button>
                <div className="c-flex m-gap-3">
                    <div className="c-flex__cell m-grow-1">
                        <Input isFullWidth placeholder="What do you want to watch?" />
                    </div>
                    <Button mode="primary">search</Button>
                </div>
            </BaseLayout.Header>
            <BaseLayout.Aside>
                <GenreToggleBar
                    tabs={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
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
    );
}

export default App;
