import React from "react";
import { useState } from "react";

export const UserContext = React.createContext({});

const UserProvider = ({children}) => {
    const [userID, setUserID] = useState(null);
    const [logedIn, setLogedIn] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    return (
        <UserContext.Provider value={{userID,logedIn, setUserID, setLogedIn, cartOpen,setCartOpen}}>
            {children}
        </UserContext.Provider>
    )
}   
 
export default UserProvider;