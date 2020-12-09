import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Companies from './Companies'
import Company from './Company.js'
import JobsList from './JobsList'
import Login from './Login'
import Profile from './Profile'
import UserContext from './UserContext'

function Routes({setToken}){
    const { currUser } = useContext(UserContext);

    const loggedOutRoutes = (
        <Switch>
            <Route exact path="/login"><Login setToken={setToken} /></Route>
            <Route exact path="/"><Home /></Route>
            <Redirect to="/"></Redirect>
        </Switch>
    )

    const loggedInRoutes = (
        <Switch>
            <Route exact path="/companies"><Companies /></Route>
            <Route exact path="/companies/:handle"><Company /></Route>
            <Route exact path="/jobs"><JobsList /></Route>
            <Route exact path="/profile"><Profile /></Route>
            <Route exact path="/"><Home /></Route>
            <Redirect to="/"></Redirect>
        </Switch>
    )

    return (
        <>{!currUser ? loggedOutRoutes : loggedInRoutes}</> 
    )
}



export default Routes;