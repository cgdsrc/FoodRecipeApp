import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryItem = (props) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props;

    return (

        <>
            <Link style={{ color: "black", textDecoration: "none" }} to={`/category/${strCategory}`}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={strCategoryThumb} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>{strCategory}</Card.Title>
                        <Card.Text style={{ textAlign: "center" }} >{strCategoryDescription.slice(0, 25)}</Card.Text>

                    </Card.Body>
                </Card>
            </Link>
        </>
    );
};

export default CategoryItem;
