import useGet from "../customHooks/useGet";
import { useParams, Link } from "react-router-dom";
const LastOrder = () => {
    const {id} = useParams();
    const {data, loading, error} = useGet('http://localhost:4000/user/'+id+'/order');

    return (
        <>
        {data &&    
            <div className="products-container">
                {data.map(product => (
                    <div className="product-container" key={product.ID}>
                        <Link className="product-container-link" to={`/product/${product.ID}`}>
                            <img src={product.Src} alt="" />
                            <div className="product-text">
                                <h1>{product.Name}</h1>
                            </div>
                        </Link>
                        <div className="product-interaction">
                            <h3>{product.Price}&#x20AC;</h3>
                            <h3>X {product.Amount}</h3>
                        </div>
                    </div>
                ))
                }

            </div>
        }
            <div className="ord-info">
                <h2>Total: {data[0].Total} &#x20AC;</h2>
                <h2>Order ID: {data[0].OrderID}</h2>
                <h2>Address: {data[0].Address}</h2>
            </div>
        </>
    );
}
 
export default LastOrder;