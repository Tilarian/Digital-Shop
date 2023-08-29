import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ product }) => {
    const onAdd = (count) => alert(count);
    return (
        <div className="cards">
            <h1>{product.name}</h1>
            <img src={product.url} alt="imagen de producto" />
            <div>{product.stock}</div>
            <ItemCount onAdd={onAdd} />
        </div>
    );
}