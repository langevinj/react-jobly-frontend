import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import useLocalStorage from './hooks'
import { decode } from "jsonwebtoken"
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

  useEffect(() => {
    async function getCurrentUser() {
      try{
        let { username } = decode(token);
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

  const logOut = () => {
    setCurrUser(null);
    setToken(null);
  }

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

  // const [jobAdded, setJobAdded] = useState(false)
  // setUser(JSON.parse(localStorage.getItem("user")));
  
  // check local storage to see if the user is logged in
  // useEffect(() => {
  //   async function loadUser(){
  //     if(user){
  //       try{
  //         let res = await JoblyApi.getUserInfo(user.user.username)
  //         setUser(res)
  //       } catch (err) {
  //         console.error(err)
  //       }
  //     } else {
  //       setUser(null)
  //       setToken(null)
  //     }
  //   }
  //   loadUser()
  // },[jobAdded, isLoggedIn])

  // useEffect(() => {
  //   async function loadUser(){
  //     if(token){
  //       let res = await JoblyApi.getUserInfo(user.user.username)
  //       setUser(res)
  //     }
  // } loadUser()
  // }, [jobAdded])

 

  // const logIn = (token, username) => {
  //   setUser({user: {username: username}});
  //   setToken(token)
  //   setIsLoggedIn(true)
  // }

  // const toggleJob = () => {
  //   setJobAdded(!jobAdded)
  // }

  

  
}

export default App;
