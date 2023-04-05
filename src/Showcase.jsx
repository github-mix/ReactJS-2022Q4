import React from 'react';
import { Provider } from 'react-redux';
import Input from './components/input/input';
import Combobox from './components/combobox/combobox';
import Checkbox from './components/checkbox/checkbox';
import Button from './components/button/button';
import Textarea from './components/textarea/textarea';
import GenreToggleBar from './components/genreToggleBar/genreToggleBar';
import MovieCard from './components/movieCard/movieCard';
import store from './store/store';

function Showcase() {
    return (
        <Provider store={store}>
            <div className="c-flex m-gap-8">
                <div style={{ width: '322px' }}>
                    <MovieCard
                        data={{
                            id: 0,
                            title: 'Fifty Shades Freed',
                            tagline: "Don't miss the climax",
                            vote_average: 6.1,
                            vote_count: 1195,
                            release_date: '2018-02-07',
                            poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
                            overview: `Believing they have left behind shadowy figures from their past, newlyweds
                             Christian and Ana fully embrace an inextricable connection and shared life of luxury.
                              But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar
                               stability, new threats could jeopardize their happy ending before it even begins.`,
                            budget: 55000000,
                            revenue: 136906000,
                            genres: ['Drama', 'Romance'],
                            runtime: 106,
                        }}
                    />
                </div>

                <GenreToggleBar
                    tabs={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
                    // sortOptions={['Option 1', 'Option 2', 'Option 3']}
                />

                <Input type="text" label="text input" value="txt" />

                <Input type="password" label="password input" placeholder="password" />

                <Input type="date" label="date input" />

                <Combobox label="combobox">
                    <div className="c-flex m-column m-gap-2">
                        <Checkbox defaultChecked>Crime</Checkbox>
                        <Checkbox>Documentary </Checkbox>
                        <Checkbox defaultChecked>Horror</Checkbox>
                        <Checkbox>Comedy</Checkbox>
                    </div>
                </Combobox>

                <Textarea label="textarea">textarea</Textarea>

                <Checkbox>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum arcu nec tempus elementum.
                </Checkbox>

                <Button>default</Button>

                <Button mode="primary">primary</Button>

                <Button mode="secondary">secondary</Button>

                <Button mode="transparent" size="small">small transparent</Button>
            </div>
        </Provider>
    );
}

export default Showcase;
