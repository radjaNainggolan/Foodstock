import useGet from "../customHooks/useGet";
import {useParams} from 'react-router-dom';
import {BsPersonCircle} from 'react-icons/bs';
const Profile = () => {
    let {id} = useParams();
    
    const {data, loading, error} = useGet('http://localhost:4000/user/'+id);
    return (  
        <div className="profile-container">
            
            {data && <>
                <div className="user-info">
                    <BsPersonCircle size="6em" color="#125B50"></BsPersonCircle>
                    <div className="info-container">
                        <h3>{data[0].FirstName} {data[0].LastName}</h3>
                        <h3>{data[0].Email}</h3>
                    </div>
                </div>
                <div className="recent-orders">

                </div>
                </>
            }
        </div>
    );
}
 
export default Profile;