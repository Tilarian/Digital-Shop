import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
    const {addItem} = useContext (CartContext)
    const onAdd = count => addItem(product, count);

    return (
        <div className="detalles_productos">
            <h1>{product.name}</h1>
            <img src={product.url} alt="imagen de producto" />
            <div>Stock: {product.stock}</div>
            <div>Precio: {product.price}</div>
            <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
    );
}