import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import UserContext from './UserContext'

import './Nav.css'

//the navbar for the app
function Nav({logOut}){
    //grab the user from the Context provider
    const { currUser } = useContext(UserContext);

    //navbar view if a user is logged in
    const loggedInView = (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            <NavLink exact to="/" className="navbar-brand">Jobly</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target='#navbarNavDropdown' aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="navbar-nav ml-auto">
                        <NavLink exact to="/companies" className="nav-item nav-link">Companies</NavLink>
                        <NavLink exact to="/jobs" className="nav-link nav-item">Jobs</NavLink>
                        <NavLink exact to="/profile" className="nav-link nav-item">Profile</NavLink>
                        <Link to="/" className="nav-link nav-item" onClick={logOut}>Logout</Link>
                </div>
            </div>
        </nav>
)
    
    //navbar view if a user is logged out
    const loggedOutView = (
        <nav className="navbar navbar-expand-lg bg-white">
            <NavLink exact to="/" className="Navbar-link navbar-brand">Jobly</NavLink>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <NavLink exact to="/login" className="Navbar-link">Login</NavLink>
                </li>
            </ul>
        </nav>
    )

    return (
        <>{!currUser ? loggedOutView : loggedInView }</>
    )
}

export default Nav;