
import React from 'react';
import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList';
import Loader from '../components/Loader';

const Home = () => {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories);
        });
    }, []);

    return (
        <>
            {!catalog.length ? (
                <Loader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
};

export default Home;