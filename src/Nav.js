import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav({user}){
    //navbar view if a user is logged in
    const loggedInView = (
        <nav className="navbar navbar-expand-lg bg-white">
            <Link to="/" className="Navbar-link navbar-brand">Jobly</Link>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/companies" className="nav-link">Companies</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/jobs" className="nav-link">Jobs</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/logout" className="nav-link">Logout</Link>
                    </li>
                </ul>
        </nav>
    )
    
    //navbar view if a user is logged out
    const loggedOutView = (
        <nav className="navbar navbar-expand-lg bg-white">
            <Link to="/" className="Navbar-link navbar-brand">Jobly</Link>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <Link to="/login" className="Navbar-link">Login</Link>
                </li>
            </ul>
        </nav>
    )

    return (
        <>{!user ? loggedOutView : loggedInView }</>
    )
}

export default Nav;