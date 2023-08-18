import React, { createContext, useState } from "react";

/*
create a UserContext and UserProvider
- wrap the application with UserProvider
- use the state variables in the User component as the values for UserContext
- connect the components to CountProvider
*/

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };