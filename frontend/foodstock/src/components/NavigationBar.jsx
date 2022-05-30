import {Link} from 'react-router-dom';
import { useState} from 'react';
import { Sling as Hamburger } from 'hamburger-react'
import Fade from 'react-reveal/Fade';

const NavigationBar = () => {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <header>

            <nav className="navbar">
                
                <div className="navbar-logo">
                    <h1 className="navbar-title">Foodstock</h1>
                    <h2 className="navbar-subtitle">Everything you want at your address</h2>
                </div>
                <div className="burger">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#125B50" ></Hamburger>
                </div>
                
                <div className="links">
                    <Link to="/categories" className="navbar-btn">Categories</Link>
                    <Link to="/" className="navbar-btn">Home</Link>
                    <Link to="/login" className="navbar-btn">Log in</Link>
                    <Link to="/signup" className="navbar-btn">Sign up</Link>
                </div>
            </nav>
            <div className="fade">
                <Fade left opposite when={isOpen}>
                    {isOpen && 
                    <div className="drop-down-menu">
                        <Link to="/cateogries" className="navbar-btn" >Categories</Link>
                        <Link to="/" className="navbar-btn">Home</Link>
                        <Link to="/login" className="navbar-btn">Log in</Link>
                        <Link to="/signup" className="navbar-btn">Sign up</Link>
                    </div>
                    }
                </Fade>
            </div>
            
        </header>
    );
}
 
export default NavigationBar;