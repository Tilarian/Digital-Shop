import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import data from "../data/products.json";


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });
        promise.then(data => setProducts(data));
    }, [])

    console.log(products);

    return (
        <Container class="mt-4">
            <h1>{props.greeting}</h1>
            <div class="cards">
                {products.map(product => (

                    <Card key={product.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.url} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.category}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                ))}
            </div>
        </Container>
    );

};