import './App.css';
import Nav from './Nav'
import Routes from './Routes'
import JoblyApi from './JoblyApi';
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useLocalStorage } from './hooks'

function App() {
  //state for whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //get methods for using localStorage from hooks
  const [token, setToken] = useLocalStorage("token")
  // const [user, addUser, clearUser] = useLocalUser({});
  const [user, setUser] = useLocalStorage("user")
  const [jobAdded, setJobAdded] = useState(false)

  //check local storage to see if the user is logged in
  useEffect(() => {
    async function loadUser(){
      if(user){
        try{
          let res = await JoblyApi.getUserInfo(user.user.username)
          setUser(res)
        } catch (err) {
          console.error(err)
        }
      }
    }
    loadUser()
  },[jobAdded, isLoggedIn])

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
