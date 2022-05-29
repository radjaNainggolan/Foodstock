import BlogList from '../components/BlogList';
import useFetch from '../customHooks/useFetch';

const Home = () => {
    
    const {data: blogs , loading, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error &&  <div>{error}</div>}
            {loading && <h1>Loading...</h1> }
            {blogs && <BlogList blogs={blogs} ></BlogList>}
        </div>
    );
}
 
export default Home;