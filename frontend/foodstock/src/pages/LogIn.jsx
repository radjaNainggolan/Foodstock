import { useState , useContext} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {UserContext} from '../contexts/UserContext';
import { useAlert } from "react-alert";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const context = useContext(UserContext);
    const alert = useAlert();
    
    const {setUserID, setLogedIn} = context;

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        }

        axios.post('http://localhost:4000/login', user)
        .then(res => {
            // console.log(res);
            window.localStorage.setItem('User',JSON.stringify({userID:res.data.id, token:res.data.token}));
            setUserID(res.data.ID);
            setLogedIn(true);
            setEmail('');
            setPassword('');
            navigate('/products');           
            alert.success(res.data.message);
        })
        .catch(err => {
            setEmail('');
            setPassword('');
            alert.error(err.response.data.message);
        });
        
    } 

    return ( 
        <div className="log-in-container">
            <img src="https://wallpaperaccess.com/full/1624848.jpg" className="log-in-image" alt="" />
            <div className="form-container">
                <h3>Log In</h3>
                <form onSubmit={handleSubmit} className="log-in-form">
                    <div className="input-container">
                        <label htmlFor="">Email</label>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="">Password</label>
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
                    </div>
                    <button className="submit-btn">Log in</button>
                </form>
            </div>
        </div>
    );
}
 
export default LogIn;
