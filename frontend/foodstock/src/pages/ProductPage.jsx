import useGet from "../customHooks/useGet";
import { useParams } from "react-router-dom";

const ProductPage = () => {

    const {id} = useParams();
    const {data, loading, error} = useGet('http://localhost:4000/products/'+id);

    return (
        <div className="product-page">
            <div className="image-and-basic-info">
                Raden
            </div>
        </div>
    );
}
 
export default ProductPage;