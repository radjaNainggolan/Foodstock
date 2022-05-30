
import { AiOutlineMail } from 'react-icons/ai';
import {MdPassword} from 'react-icons/md'
import { useState , useContext} from "react";
import {useNavigate} from "react-router-dom";
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const context = useContext(UserContext);
    const {setUserID, setLogedIn} = context;

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        }

        axios.post('http://localhost:4000/login', user)
        .then(res => {
            console.log(res);
            setUserID(res.data.id);
            setLogedIn(true);
            window.localStorage.setItem('JWT',res.data.token);
        })
        .catch(err => {
            console.log(err);
        });
        setEmail('');
        setPassword('');
        navigate('/');
    } 

    return ( 
        <div className="log-in-container">
            <img src="https://wallpaperaccess.com/full/1624848.jpg" className="log-in-image" alt="" />
            <div className="form-container">
                <h3>Log In</h3>
                
                <form onSubmit={handleSubmit} className="log-in-form">
                    <div className="email">
                        <label htmlFor="">Email</label>
                        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="email-input" />
                    </div>
                    <div className="password">
                        <label htmlFor="">Password</label>
                        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="password-input" />
                    </div>
                    <button className="submit-btn">Log in</button>
                </form>
            </div>
        </div>
    );
}
 
export default LogIn;
