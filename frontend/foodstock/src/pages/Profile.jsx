import useGet from "../customHooks/useGet";
import useGetWithHeaders from '../customHooks/useGetWithHeaders.js';
import {useParams} from 'react-router-dom';
import {BsPersonCircle} from 'react-icons/bs';
import { Link } from "react-router-dom";
const Profile = () => {
    let {id} = useParams();
    
    const User = JSON.parse(window.localStorage.getItem('User'));
    const token = User.token;
    const headers ={
        JWT:token
    }

    let {data, loading, error} = useGetWithHeaders('http://localhost:4000/user/'+id,headers);
    const lastOrder = useGet('http://localhost:4000/user/'+id+'/order');
    //const allOrders = useGet('http://localhost:4000/user/'+id+'/orders')
    return (  
        <div className="profile-container">
            
            <div className="user-and-last-order">                   
                {data && 
                    <div className="user-info">
                        <BsPersonCircle size="6em" color="#125B50"></BsPersonCircle>
                        <div className="info-container">
                            <h3>{data[0].FirstName} {data[0].LastName}</h3>
                            <h3>{data[0].Email}</h3>
                        </div>
                    </div>
                
                }
                {lastOrder.data !== null? 
                    (
                        <Link to={`/order/:${lastOrder.data[0].orderID}`} className="ord">
                            <h1>Last Order</h1>
                            <img  src={lastOrder.data[0].Src}  alt="" />                        
                            <div>
                                <h4>Total price: {lastOrder.data[0].Total}&#x20AC;</h4>
                                <h4>Order ID: {lastOrder.data[0].orderID}</h4>
                                <h4>Address: {lastOrder.data[0].Address}</h4>
                            </div>
                        </Link>

                    ) : (
                        <>
                        </>
                    )
                }
            </div>
            <div className="orders">

            </div>
        </div>
    );
}
 
export default Profile;