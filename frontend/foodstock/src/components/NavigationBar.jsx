import {Link} from 'react-router-dom';
import { useState ,useContext } from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import Fade from 'react-reveal/Fade';
import CategoriesLinkList from './CategoriesLinkList';
import useGet from '../customHooks/useGet';
import { UserContext } from '../contexts/UserContext';
import {AiOutlineShoppingCart} from 'react-icons/ai'


const NavigationBar = () => {
    const [isOpen, setOpen] = useState(false);
    const [catOpen, setCatOpen] = useState(false);
    const [catOpen2, setCatOpen2] = useState(false);
    const context = useContext(UserContext);
    const {userID, logedIn, setLogedIn, setUserID, cartOpen, setCartOpen} = context;

    const user = JSON.parse(window.localStorage.getItem('User'));
    if(user.userID !== "" && user.token !== "")
    {
        setLogedIn(true);
        setUserID(user.userID);
    }else{
        setUserID(null);
        setLogedIn(false);
    }

    const handleLogOut = () =>{
        setLogedIn(false);
        setUserID(null);
        window.localStorage.setItem('User',JSON.stringify({userID:"", token:""}));
        window.localStorage.removeItem('products');
    }

    let {data:categories} = useGet('http://localhost:4000/categories');
    
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-logo">
                    <h1 className="navbar-title">Foodstock</h1>
                    <h2 className="navbar-subtitle">Everything you want at your address</h2>
                </div>
                
                <div className="burger">
                    {logedIn && <AiOutlineShoppingCart size={40} cursor="pointer" onClick={() =>setCartOpen(!cartOpen)} color='#125B50'></AiOutlineShoppingCart>}
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#125B50" ></Hamburger>
                </div>
                <div className="links">
                    <Link to="/products" className="navbar-btn">All products</Link>
                    <button className="navbar-btn cat" onClick={() => setCatOpen2(!catOpen2)}>Categories</button>
                    <Link to="/" className="navbar-btn">Home</Link>
                    { logedIn ? 
                        (   <>  
                                <Link to={`/profile/${userID}`} className="navbar-btn">Profile</Link>
                                <Link 
                                    to="/" 
                                    className="navbar-btn" 
                                    onClick={handleLogOut}
                                    >
                                    Log out
                                </Link>
                                <button className="navbar-btn" onClick={() =>setCartOpen(!cartOpen)}>Cart</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="navbar-btn" >Log in</Link>
                                <Link to="/signup" className="navbar-btn">Sign up</Link>
                            </>
                        )
                    }
                </div>
            </nav>
            <div className="fade">
                <Fade top when={isOpen}>
                    {isOpen && 
                        <div className="drop-down-menu">
                            <Link to="/products" className="navbar-btn">All products</Link>
                            <button className="navbar-btn cat" onClick={()=> setCatOpen(!catOpen)}>Categories</button>
                            {catOpen && categories &&
                                <CategoriesLinkList categories={categories}></CategoriesLinkList>
                            }
                            <Link to="/" className="navbar-btn">Home</Link>
                            { logedIn ? 
                            (   <div className="drop-down-menu" >
                                    <Link to={`/profile/${userID}`} className="navbar-btn">Profile</Link>
                                    <Link to="/" className="navbar-btn" onClick={handleLogOut}>Log out</Link>
                                    
                                </div>
                            ) : (
                                <div className="drop-down-menu" >
                                    <Link to="/login" className="navbar-btn" >Log in</Link>
                                    <Link to="/signup" className="navbar-btn">Sign up</Link>
                                </div>
                            )
                            
                            }
                        </div>
                    }
                </Fade>
                <Fade top when={catOpen2}>
                    {catOpen2 && categories &&
                        <CategoriesLinkList  categories={categories}></CategoriesLinkList>
                    }
                </Fade>
            </div>
            
        </header>
    );
}
 
export default NavigationBar;