import {Link} from 'react-router-dom';
import {BsCartPlus} from 'react-icons/bs'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useAlert } from 'react-alert';
const ProductCard = ({product}) => {
    const context = useContext(UserContext);
    const {cartOpen, setCartOpen, logedIn} = context;
    let total = 0;
    const alert = useAlert();
    const addProduct = () => {
        if(window.localStorage.getItem('products') === null && logedIn) {
            console.log(logedIn);
            const products = [{ID:product.ID, Src:product.Src, Name:product.Name, Price:product.Price, Amount:1}];
            total = total + product.Price; 
            window.localStorage.setItem('products',JSON.stringify({products:products, total:total}));
            console.log({products:products, total:total});
            setCartOpen(!cartOpen);
        }else if(window.localStorage.getItem('products') !== null && logedIn){
            let cart = JSON.parse(window.localStorage.getItem('products'));
            if(cart.products.filter(p => p.ID === product.ID).length > 0){
               let prod = cart.products.find(p => p.ID === product.ID);
               prod.Amount = prod.Amount + 1;
               let index = cart.products.findIndex(p => p.ID === product.ID);
               cart.products[index] = prod;
               cart.total = cart.total + product.Price;
            }else{
                cart.products.push({ID:product.ID, Src:product.Src, Name:product.Name, Price:product.Price, Amount:1})
                cart.total = cart.total + product.Price;
            }
            console.log(cart);
            window.localStorage.setItem('products',JSON.stringify(cart));
            setCartOpen(!cartOpen);
        }else{
            alert.info('Sign up or log in if you already have an account');
        }    
    }

    return (
        <>
            <Link className="product-container-link" to={`/product/${product.ID}`}>
                <img src={product.Src} alt="" />
                <div className="product-text">
                    <h1>{product.Name}</h1>
                </div>
            </Link>
            <div className="product-interaction">
                <h3>{product.Price}&#x20AC;</h3>
                <button onClick={addProduct}><BsCartPlus size={20}></BsCartPlus></button>
            </div>
        </>
    );
}
 
export default ProductCard;