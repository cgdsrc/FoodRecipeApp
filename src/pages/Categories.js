import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import Loader from '../components/Loader';
import MealList from '../components/MealList';

const Categories = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            {console.log(meals, meals.length, meals.length < 1)}
            {meals.length < 1 ? <Loader /> : <MealList meals={meals} />}
        </>
    );
};

export default Categories;