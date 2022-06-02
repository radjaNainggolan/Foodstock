import CategoriesLinkList from '../components/CategoriesLinkList';
import useGet from '../customHooks/useGet';
const Categories = () => {

    const {data:categories, loading, error} = useGet('http://localhost:4000/categories');

    return (
        <div className="container">
            {categories && <CategoriesLinkList categories={categories}></CategoriesLinkList>}
        </div>
        
    );
}
 
export default Categories;