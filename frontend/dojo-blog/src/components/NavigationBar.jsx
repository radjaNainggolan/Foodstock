import {Link} from 'react-router-dom';
import home from '../icons/home.svg';
const NavigationBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1 className="navbar-title">Foodstock</h1>
                <h2 className="navbar-subtitle">Everything you want at your address</h2>
            </div>
            <div className="links">
                <Link to="/cateogries" className="navbar-btn">Categories</Link>
                <Link to="/" className="navbar-btn">Home</Link>
                <Link to="/login" className="navbar-btn">Log in</Link>
                <Link to="/signup" className="navbar-btn">Sign up</Link>
            </div>
        </nav>
    );
}
 
export default NavigationBar;