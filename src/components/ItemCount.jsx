import { useState } from "react";
import { Button, } from "react-bootstrap"

export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    const handleIncreaseCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1);
        }
    };

    return (
        <div className="itemCount">
            <span onClick={handleDecreaseCount}><Button variant="outline-danger">-</Button></span>
            <span>{count}</span>
            <span onClick={handleIncreaseCount}><Button variant="outline-success">+</Button></span>
            <Button variant="primary" onClick={() => onAdd (count)}>Agregar al carrito</Button>
        </div>
    );
};

