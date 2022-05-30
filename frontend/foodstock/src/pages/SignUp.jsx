import { AiOutlineMail } from 'react-icons/ai';
import {MdPassword} from 'react-icons/md'
import { useState , useContext} from "react";
import {useNavigate} from "react-router-dom";
import { UserContext } from '../contexts/UserContext';
import axios from 'axios';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const context = useContext(UserContext);
    const {setUserID, setLogedIn} = context;

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            firstName,
            lastName,
            userName,
            email,
            password
        }

        axios.post('http://localhost:4000/signup', user)
        .then(res => {
            console.log(res);
            setUserID(res.data.id);
            setLogedIn(true);
            window.localStorage.setItem('JWT',res.data.token);
            console.log(window.localStorage.getItem('JWT'));
        })
        .catch(err => {
            console.log(err);
        });

        navigate('/');
    } 
    return (
    <div className="sign-up-container">
        <img src="https://wallpaperaccess.com/full/1624848.jpg" className="log-in-image" alt="" />
        <div className="form-container">
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit} className="sign-up-form">
            <div className="email">
                    {/* <AiOutlineMail color='#125B50' size="1.5em"></AiOutlineMail> */}
                    <label htmlFor="">First Name</label>
                    <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} className="email-input" />
                </div>
                <div className="email">
                    {/* <AiOutlineMail color='#125B50' size="1.5em"></AiOutlineMail> */}
                    <label htmlFor="">Last Name</label>
                    <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} className="email-input" />
                </div>
                <div className="email">
                    {/* <AiOutlineMail color='#125B50' size="1.5em"></AiOutlineMail> */}
                    <label htmlFor="">Username</label>
                    <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)} className="email-input" />
                </div>
                <div className="email">
                    {/* <AiOutlineMail color='#125B50' size="1.5em"></AiOutlineMail> */}
                    <label htmlFor="">Email</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="email-input" />
                </div>
                
                <div className="password">
                    {/* <MdPassword color='#125B50' size="1.5em"></MdPassword> */}
                    <label htmlFor="">Password</label>
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="password-input" />
                </div>
                <button className="submit-btn">Log in</button>
            </form>
        </div>
    </div>
    );
}
 
export default SignUp;