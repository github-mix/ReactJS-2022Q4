import './searchHeader.scss';
import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import AddMoviePopupButton from '../addMoviePopupButton/AddMoviePopupButton';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { fetchMovies } from '../../store/actions';

function SearchHeader() {
    const outputParams = useSelector((state) => state.outputParams);
    const initialValues = {
        search: outputParams.search,
    };
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        const newOutputParams = (values.search) ? {
            search: values.search,
            filter: null,
        } : { search: null };

        dispatch(fetchMovies(newOutputParams));
    };

    return (
        <div className="c-search-header">
            <h1 className="c-search-header__title">FIND YOUR MOVIE</h1>
            <AddMoviePopupButton />
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <div className="c-flex m-gap-3">
                        <div className="c-flex__cell m-grow-1">
                            <Input name="search" isFullWidth placeholder="What do you want to watch?" />
                        </div>
                        <Button type="submit" mode="primary">search</Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default SearchHeader;
