import {Link} from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h1>This page was not found...</h1>
            <Link to="/">Go back to home page</Link>
        </div>
    );
}
 
export default NotFound;