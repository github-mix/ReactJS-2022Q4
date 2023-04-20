import './searchHeader.scss';
import React from 'react';
import { Formik, Form } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import AddMoviePopupButton from '../addMoviePopupButton/AddMoviePopupButton';
import Input from '../../components/input/input';
import Button from '../../components/button/button';

function SearchHeader() {
    const params = useParams();
    const navigate = useNavigate();
    const initialValues = {
        search: params.searchQuery,
    };

    const handleSubmit = (values) => {
        navigate(`${values.search}`);
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
