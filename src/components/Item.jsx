import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ product }) => (
    <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.url} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{`Precio: $ ${product.price}`}</Card.Text>
            <Card.Text>{`Stock: ${product.stock}`}</Card.Text>
            <Link to={`/item/${product.id}`}>
                <Button variant="primary">Detalles</Button>
            </Link>
        </Card.Body>
    </Card>
);