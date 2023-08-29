import { useState } from "react";

const stock = 4;

export const ItemCount = ({ onAdd }) => {
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
            <span onClick={handleDecreaseCount}>-</span>
            <span>{count}</span>
            <span onClick={handleIncreaseCount}>+</span>
            <button onClick={() => onAdd(`Has agregado ${count} articulo/s al carrito`)}>Agregar al carrito</button>
        </div>
    );
};

