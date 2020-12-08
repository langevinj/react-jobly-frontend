import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useLocalStorage } from './hooks'
import { decode } from "jsonwebtoken"
import './App.css';
import Nav from './Nav'
import Routes from './Routes'
import JoblyApi from './JoblyApi';

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
        setCurrUser(currUser);
      } catch (err) {
        setCurrUser(null);
      }
      setUserLoaded(true);
    }
    setUserLoaded(false);
    getCurrentUser();
  }, [token])
  //state for whether the user is logged in or not
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  //get methods for using localStorage from hooks
  // const [user, setUser] = useLocalStorage("user")
  const [jobAdded, setJobAdded] = useState(false)
  // setUser(JSON.parse(localStorage.getItem("user")));
  
  // check local storage to see if the user is logged in
  useEffect(() => {
    async function loadUser(){
      if(user){
        try{
          let res = await JoblyApi.getUserInfo(user.user.username)
          setUser(res)
        } catch (err) {
          console.error(err)
        }
      } else {
        setUser(null)
        setToken(null)
      }
    }
    loadUser()
  },[jobAdded, isLoggedIn])

  // useEffect(() => {
  //   async function loadUser(){
  //     if(token){
  //       let res = await JoblyApi.getUserInfo(user.user.username)
  //       setUser(res)
  //     }
  // } loadUser()
  // }, [jobAdded])

  const logOut = () => {
    setUser(null);
    setToken(null);
    setIsLoggedIn(false)
  }

  const logIn = (token, username) => {
    setUser({user: {username: username}});
    setToken(token)
    setIsLoggedIn(true)
  }

  const toggleJob = () => {
    setJobAdded(!jobAdded)
  }

  

  return (
    <div className="App bg-light">
      <BrowserRouter>
          <Nav user={user}/>
          <Routes logOut={logOut} user={user} toggleJob={toggleJob} jobAdded={jobAdded} logIn={logIn}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
