import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Companies from './Companies'
import Company from './Company.js'
import JobsList from './JobsList'
import Login from './Login'
import Profile from './Profile'
import Logout from './Logout'

function Routes({logOut, user, toggleJob, jobAdded, logIn}){

    const loggedOutRoutes = (
        <Switch>
            <Route exact path="/login"><Login logIn={logIn} /></Route>
            <Route exact path="/"><Home user={user} /></Route>
            <Redirect to="/"></Redirect>
        </Switch>
    )

    const loggedInRoutes = (
        <Switch>
            <Route exact path="/companies"><Companies /></Route>
            <Route exact path="/companies/:handle"><Company toggleJob={toggleJob}/></Route>
            <Route exact path="/jobs"><JobsList toggleJob={toggleJob} jobAdded={jobAdded} /></Route>
            <Route exact path="/login"><Login logIn={logIn} /></Route>
            <Route exact path="/logout"><Logout logOut={logOut} /></Route>
            <Route exact path="/profile"><Profile /></Route>
            <Route exact path="/"><Home user={user} /></Route>
            <Redirect to="/"></Redirect>
        </Switch>
    )

    return (
        <>{!user ? loggedOutRoutes : loggedInRoutes}</> 
    )
}



export default Routes;