import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { decode } from "jsonwebtoken"
import useLocalStorage from './hooks'

import './App.css';
import Nav from './Nav'
import Routes from './Routes'
import JoblyApi from './JoblyApi';
import UserContext from './UserContext'

export const TOKEN_KEY = "jobly-token"

function App() {
  const[userLoaded, setUserLoaded] = useState(false);
  const[currUser, setCurrUser] = useState(null);

  const [token, setToken] = useLocalStorage(TOKEN_KEY)

  //when the app renders, or when the token is set, update the users information and set the token for API calls
  useEffect(() => {
    async function getCurrentUser() {
      try{
        let { username } = decode(token);
        JoblyApi.token = token;
        let currentUser = await JoblyApi.getUserInfo(username)
        setCurrUser(currentUser);
      } catch (err) {
        setCurrUser(null);
      }
      setUserLoaded(true);
    }
    setUserLoaded(false);
    getCurrentUser();
  }, [token]);

  //function to log a user out and reset localStorage
  const logOut = () => {
    setCurrUser(null);
    setToken(null);
  }

  //if the users data is not loaded, present a loading screen
  if(!userLoaded) {
    return <div><h2>Loading...</h2></div>
  }

  return (
      <BrowserRouter>
        <UserContext.Provider value={{ currUser, setCurrUser }}>
          <div className="App bg-light">
            <Nav logOut={logOut} />
            <Routes setToken={setToken} />
          </div>
        </UserContext.Provider>
      </BrowserRouter>
  );  
}

export default App;
