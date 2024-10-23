import React from "react";                 //this is setup of context api
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {         //isme data pass kra rahe hai children se
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}> {/*usercontext ko akele likha se kaam nhi hoga usme provider value deni hoti hai jisse kaam kre . kya chiz access karega toh access karna ke liya data bhi dena hota */}
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider