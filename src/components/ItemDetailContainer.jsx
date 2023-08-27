import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const productById = data.find(product => product.id === id);
                resolve(productById);
            }, 2000);
        });
        
        promise.then((data) => setProduct(data));
    }, [])

    if (!product) return

    return (
        <Container class="mt-4">
            <h1>Detalles</h1>
            <ItemDetail product={product} />
        </Container>
    );

};