import useGet from "../customHooks/useGet";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
const ProductPage = () => {

    const {id} = useParams();
    const {data, loading, error} = useGet('http://localhost:4000/products/'+id);

    return (
        <>
            <Loader loading={loading}></Loader>
            {data && 
                <div className="product-page">
                    <div className="image-and-basic-info">
                        <img src={data[0].Src} alt="" />
                        <div className="basic-info">
                            <h2>{data[0].Name}</h2>
                            <p>{data[0].Description}</p>
                            <div className="price-and-btn">
                                <h1>{data[0].Price}</h1>
                                <button></button>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </>
    );
}
 
export default ProductPage;