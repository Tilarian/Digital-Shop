import { useContext } from "react";
import cart from "../assets/carrito.png";
import { CartContext } from "../contexts/CartContext";


export const CartWidget = () => {
    const { totalWidget } = useContext(CartContext)
    return (
        <>
            <img src={cart} alt="Cart" /> <span>{totalWidget}</span>
        </>
    )
}
