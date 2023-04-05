import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseLayout from '../components/baseLayout/baseLayout';
import Logo from '../components/logo/logo';
import GenreToggleBar from '../components/genreToggleBar/genreToggleBar';
import ErrorBoundary from '../components/errorBoundary/errorBoundary';
import MovieCardsGrid from '../components/movieCardsGrid/movieCardsGrid';
import BaseLayoutContext from '../components/baseLayout/baseLayoutContext';
import SearchHeader from './searchHeader/searchHeader';
import { fetchMovies } from '../store/actions';

function Page() {
    const dispatch = useDispatch();
    const [movieID, setMovieID] = useState(0);
    const memoizedMovieIDValue = useMemo(() => ({ movieID, setMovieID }), [movieID]);

    const state = useSelector((currentState) => currentState);

    const mainContent = () => {
        if (state.isLoading) {
            return <div className="u-text-align-center">Loading ...</div>;
        }

        return (
            <ErrorBoundary>
                <MovieCardsGrid>
                    {state.moviesData.data}
                </MovieCardsGrid>
            </ErrorBoundary>
        );
    };

    useEffect(() => {
        dispatch(fetchMovies(state.outputParams));
    }, [dispatch]);

    return (
        <BaseLayoutContext.Provider value={memoizedMovieIDValue}>
            <BaseLayout>
                <BaseLayout.Header>
                    <SearchHeader />
                </BaseLayout.Header>
                <BaseLayout.Aside>
                    <GenreToggleBar />
                </BaseLayout.Aside>
                <BaseLayout.Main>
                    {mainContent()}
                </BaseLayout.Main>
                <BaseLayout.Footer>
                    <Logo />
                </BaseLayout.Footer>
            </BaseLayout>
        </BaseLayoutContext.Provider>
    );
}

export default Page;
