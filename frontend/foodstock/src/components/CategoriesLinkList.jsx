import {Link} from 'react-router-dom';

const CategoriesLinkList = ({categories}) => {
    return (  
        
        <div className="categories-list">
            {categories.map(category => (
                
                <Link className="category" key={category.ID} to={`/categories/${category.ID}`}>
                    <img src={category.Src} alt="" />
                    <h3>{category.CategoryName}</h3>
                </Link>
                
            ))}
        </div>
    );
}
 
export default CategoriesLinkList;