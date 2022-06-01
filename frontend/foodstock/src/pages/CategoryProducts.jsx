import useGet from "../customHooks/useGet";
import { useParams } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import Loader from "../components/Loader";
const CategoryProducts = () => {
    const {id} = useParams();
    const{data, loading, error} = useGet('http://localhost:4000/products/category/'+id);

    return (
        <>  
            <Loader loading={loading}></Loader>
            {data && <ProductsList data={data}/>}
        </>
    );
}
 
export default CategoryProducts;