import useGet from "../customHooks/useGet";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import {BsCartPlus} from 'react-icons/bs'
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
                                <h1>{data[0].Price}&#x20AC;</h1>
                                <button><BsCartPlus size={20}></BsCartPlus></button>
                            </div>
                        </div>
                    </div>
                    <div className="additional-info">

                    </div>

                </div>
            }
        </>
    );
}
 
export default ProductPage;