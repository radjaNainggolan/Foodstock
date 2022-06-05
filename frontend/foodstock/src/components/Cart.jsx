import { useContext, useEffect ,useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import Fade from 'react-reveal/Fade';
import MinusButton from './MinusButton';
import PlusButton from './PlusButton';
const Cart = () => {
    const context = useContext(UserContext);
    const {cartOpen, setCartOpen} = context;
    const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem('products')));
    const [remove, setRemove] = useState(false);
    
    const handeRemoveAllItems = () => {
        window.localStorage.removeItem('products');
        setRemove(!remove);
    }

    const handlePlus = (id) => {
        let cart = JSON.parse(window.localStorage.getItem('products'));
        let prod = cart.products.find(p => p.ID === id);
        prod.Amount = prod.Amount + 1;
        let index = cart.products.findIndex(p => p.ID === id);
        cart.products[index] = prod;
        cart.total = cart.total + prod.Price;
        window.localStorage.setItem('products',JSON.stringify(cart));
        setCart(cart);
    }

    const handleMinus = (id) => {
        let cart = JSON.parse(window.localStorage.getItem('products'));
        let prod = cart.products.find(p => p.ID === id);
        prod.Amount = prod.Amount - 1;
        let index = cart.products.findIndex(p => p.ID === id);
        if(prod.Amount === 0){
            cart.products.splice(index, 1);
            if(cart.products.length === 0){
                window.localStorage.removeItem('products');
                setRemove(!remove);
                return;
            }
        }else{

            cart.products[index] = prod;
        }
        cart.total = cart.total - prod.Price;
        window.localStorage.setItem('products',JSON.stringify(cart));
        setCart(cart);
    }

    return ( 
        <Fade right when={cartOpen}>
            {cartOpen && 
                <div onMouseLeave={()=> setCartOpen(!cartOpen)} className="cart">
                    <div className="cart-header">
                        <h1>Cart</h1>
                        {window.localStorage.getItem('products') &&
                            <button onClick={handeRemoveAllItems}>Remove all items</button>
                        }
                    </div>
                    {window.localStorage.getItem('products') ? 
                    (
                        <div className="products">
                            {JSON.parse(window.localStorage.getItem('products')).products.map((product) =>(
                                <div className="cart-product" key={product.ID}>
                                    <img src={product.Src} alt="" />
                                    <h4 className="cart-product-name">{product.Name}</h4>
                                    <div className="cart-product-info">
                                        <div className="cart-product-price">
                                            <h3>{product.Price} &#x20AC;</h3>
                                            <h4>Total for this product: <span> {product.Price*product.Amount}&#x20AC;</span></h4>
                                        </div>
                                        <div className="cart-product-btns">
                                            <MinusButton id={product.ID} handleMinus={handleMinus}></MinusButton>
                                            <h3>{product.Amount}</h3>
                                            <PlusButton id={product.ID} handlePlus={handlePlus}></PlusButton>
                                        </div>
                                    </div>
                                </div>
                            ))

                            }
                        </div>
                    ) : 
                    (
                        <div className="empty-cart">
                            <h1>Still no products in cart.</h1>
                        </div>
                    )
                    }
                    {window.localStorage.getItem('products') &&
                        <div className="make-order-container">
                            <p>Total to pay: {JSON.parse(window.localStorage.getItem('products')).total} &#x20AC;</p>
                            <button className="make-order-btn">Make order</button>
                        </div>
                    }
                </div>
                
            }
        </Fade>
    );
}
 
export default Cart;