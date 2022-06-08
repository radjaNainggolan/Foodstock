import { Link } from "react-router-dom";
import {FiFacebook, FiTwitter, FiLinkedin, FiInstagram} from 'react-icons/fi'
import {ImLocation, ImPhone} from 'react-icons/im';
import {MdEmail} from  'react-icons/md';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text">
                <div className="find-us">
                    <h2>Find us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore eius consequuntur quod aut consequatur. Veritatis minus non ea a saepe placeat! Culpa beatae temporibus eaque, impedit est possimus ut deleniti.</p>
                    <div className="icn">
                        <div className="loaction"><span><ImLocation></ImLocation><p> Blaza Jovanovica 30.</p></span></div>
                        <div className="phone"><span><ImPhone></ImPhone><p> 002 486 256</p></span></div>
                        <div className="email"><span><MdEmail></MdEmail><p> foodstock@gmail.com</p></span></div>
                    </div>
                </div>
                <div className="about">
                    <h2>About</h2>
                    <div className="abt-links">
                        <Link to="/">Company</Link>
                        <Link to="/">Team</Link>
                        <Link to="/">Careers</Link>
                    </div>
                </div>
                <div className="company-name">
                    <h2>Foodstock</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat vitae perferendis consequuntur itaque amet? Aliquam pariatur consequatur earum reiciendis dignissimos facilis totam facere nemo iste laudantium animi omnis, quod quas.</p>
                </div>
            </div>
            <div className="footer-icons">
                <FiFacebook size={35}></FiFacebook>
                <FiTwitter size={35}></FiTwitter>
                <FiLinkedin size={35}></FiLinkedin>
                <FiInstagram size={35}></FiInstagram>
            </div>
        </div>
    );
}
 
export default Footer;


