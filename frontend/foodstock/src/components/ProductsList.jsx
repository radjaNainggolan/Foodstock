import ProductCard from "./ProductCard";

const ProductsList = ({data}) => {
    return (
        <>
        <div className="products-container">
                {data.map( product => (
                    <div className="product-container" key={product.ProductID}>
                        <ProductCard product={product}/>
                    </div>
                ))}        
            </div>   
        </>
    );
}
 
export default ProductsList;