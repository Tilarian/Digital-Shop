export const ItemDetail = ({ product }) => (
    <div className="cards">
        <h1>{product.name}</h1>
        <img src={product.url} alt="imagen de producto" />
        <div>{product.stock}</div>
    </div>
);