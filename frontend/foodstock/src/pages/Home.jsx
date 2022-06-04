import { Link } from "react-router-dom";

const Home = () => {
    return (
       <div className="home-page-container">
           <div className="home-text">
               <h1>Foodstock, order your foodstuffs from the comfort of your home</h1>
               <h2>Here you can order any food or any other product just by simple few clicks</h2>
               <p>Sign up and avoid waiting in lines at the store</p>
           </div>
           <div className="home-buttons">
               <Link to="/login">Log in</Link>
               <Link to="/signup">Sign up</Link>
           </div>
       </div> 
    );
}
 
export default Home;
