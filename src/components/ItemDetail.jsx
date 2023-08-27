export const ItemDetail = ({ product }) => (
    <div class="cards">
        <h1>{product.name}</h1>
        <img src={product.url} alt="imagen de producto" />
        <div>{product.stock}</div>
    </div>
);