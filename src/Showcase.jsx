import React from 'react';
import Input from './components/input/input';
import Combobox from './components/combobox/combobox';
import Checkbox from './components/checkbox/checkbox';
import Button from './components/button/button';
import Textarea from './components/textarea/textarea';
import GenreToggleBar from './components/genreToggleBar/genreToggleBar';
import MovieCard from './components/movieCard/movieCard';
import Popup from './components/popup/popup';

function Showcase() {
    return (
        <div className="c-flex m-gap-8">
            <Popup
                title="Popup title"
                body={<MovieCard />}
                footer={(
                    <>
                        <Button mode="primary" size="small">primary</Button>
                        <Button mode="secondary" size="small">secondary</Button>
                    </>
                )}
            />

            <div style={{ width: '322px' }}>
                <MovieCard title="Bohemian Rhapsody" genres={['Drama', 'Biography', 'Music']} year="2003" />
            </div>

            <GenreToggleBar
                tabs={['All', 'Documentary', 'Comedy', 'Horror', 'Crime']}
                sortOptions={['Option 1', 'Option 2', 'Option 3']}
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
    );
}

export default Showcase;
