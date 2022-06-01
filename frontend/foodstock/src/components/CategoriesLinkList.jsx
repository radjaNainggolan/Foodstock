import {Link} from 'react-router-dom';

const CategoriesLinkList = ({categories}) => {
    return (  
        
        <div className="drop-down-category">
            {categories.map(category => (
                
                <Link className="category" key={category.ID} to={`/products/category/${category.ID}`}>
                    {category.CategoryName}
                </Link>
                
            ))}
        </div>
    );
}
 
export default CategoriesLinkList;