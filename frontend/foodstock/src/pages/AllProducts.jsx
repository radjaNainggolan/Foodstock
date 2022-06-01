import useGet from "../customHooks/useGet";
import ProductsList from "../components/ProductsList";
import Loader from "../components/Loader";
const AllProducts = () => {
    
    const {data, loading, error} = useGet('http://localhost:4000/products');
    console.log(data);
    return (
        <>  
            <Loader loading={loading}></Loader>
            {/* {error && <h1>{error}</h1>} */}
            {data &&
                <ProductsList data={data}/>
            }
        </>
    );
}
 
export default AllProducts;