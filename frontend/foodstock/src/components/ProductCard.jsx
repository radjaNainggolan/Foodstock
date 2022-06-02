import {Link} from 'react-router-dom';
import {BsCartPlus} from 'react-icons/bs'
const ProductCard = ({product}) => {
    return (
        <>
            <Link className="product-container-link" to={`/product/${product.ID}`}>
                <img src={product.Src} alt="" />
                <div className="product-text">
                    <h1>{product.Name}</h1>
                </div>
            </Link>
            <div className="product-interaction">
                <h3>{product.Price}&#x20AC;</h3>
                <button><BsCartPlus size={20}></BsCartPlus></button>
            </div>
        </>
    );
}
 
export default ProductCard;