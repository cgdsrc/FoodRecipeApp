import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../api';
import Loader from '../components/Loader';
import { Col, Row, Table } from 'react-bootstrap';

const Reciepe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getRecipeDetails(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Loader />
            ) : (
                <>
                    <Row style={{ margin: "50px" }}>
                        <Row >
                            <Col style={{ textAlign: "center" }}>
                                <img
                                    src={recipe.strMealThumb}
                                    alt={recipe.strMeal}
                                />
                                <h1 >{recipe.strMeal}</h1>
                                <h4>Category: {recipe.strCategory}</h4>

                            </Col >
                            <Col >
                                <Table >
                                    <thead>
                                        <tr>
                                            <th>Ingredient</th>
                                            <th>Measure</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(recipe).map((key) => {
                                            if (key.includes("Ingredient") && recipe[key]) {
                                                return (
                                                    <tr key={key}>
                                                        <td>{recipe[key]}</td>
                                                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                                    </tr>
                                                );
                                            }
                                            return null;
                                        })}
                                    </tbody>
                                </Table>
                                <p style={{ backgroundColor: "rgb(255 255 255 / 60%)", color: "black" }}
                                    dangerouslySetInnerHTML={{
                                        __html: recipe.strInstructions.replace(
                                            /(?:\r\n|\r|\n)/g,
                                            '<br />'
                                        ),
                                    }}></p>

                                {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                                {recipe.strYoutube ? (
                                    <div>
                                        <iframe
                                            id='ytplayer'
                                            type='text/html'
                                            width='640'
                                            height='360'
                                            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                                -11
                                            )}`}
                                            frameBorder='0'
                                            style={{ marginTop: '1rem', width: "50rem" }}
                                        />
                                    </div>
                                ) : null}

                            </Col >
                        </Row>
                    </Row>
                </>
            )}
        </>
    );
};

export default Reciepe;