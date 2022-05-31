import useGet from "../customHooks/useGet";
import { Link } from "react-router-dom";
import {BsCartPlus} from 'react-icons/bs'
const AllProducts = () => {
    
    const {data, loading, error} = useGet('http://localhost:4000/products');
    console.log(data);
    return (
        <>
            {data && 
            
            <div className="products-container">
                {data.map( product => (
                    <div className="product-container" key={product.ProductID}>
                        <Link to={`/product/${product.ID}`}>
                            <img src={product.Src} alt="" />
                            <div className="product-text">
                                <h1>{product.Name}</h1>
                                <h2>{product.Description}</h2>
                            </div>
                        </Link>
                        <div className="product-interaction">
                            <h3>{product.Price}&#x20AC;</h3>
                            <button><BsCartPlus size={20}></BsCartPlus></button>
                        </div>
                    </div>
                ))}        
            </div>    
            }
        </>
    );
}
 
export default AllProducts;