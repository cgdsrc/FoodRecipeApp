import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, idMeal, strMealThumb } = props;

    return (
        <>
            <Link style={{ color: "black", textDecoration: "none" }} to={`/recipe/${idMeal}`}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>{strMeal}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </>
    );
};

export default Meal;