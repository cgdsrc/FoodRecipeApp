import { API_URL } from './config';


const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
};

const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName.toString());
    return await response.json();
};

const getRecipeDetails = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId.toString());
    return await response.json();
};

export { getAllCategories, getFilteredCategory, getRecipeDetails };