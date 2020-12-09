import React from 'react'
import UserContext from './UserContext'

const testUser = { username: "testuser", firstName: "test", lastName: "testy"}

const UserProvider = ({ children , currUser = testUser }) => (
    <UserContext.Provider value={{currUser}}>
        {children}
    </UserContext.Provider>
);

export { UserProvider }