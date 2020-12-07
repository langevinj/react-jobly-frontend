import React from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav({user}){
    const ACTIVE_STYLES = {
        fontWeight: "bold",
        color: 	"#0275d8",
    };

    //navbar view if a user is logged in
    const loggedInView = (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <NavLink exact to="/" className="Navbar-link navbar-brand">Jobly</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target={$('#navbarNavDropdown')} aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink exact to="/companies" className="nav-link" activeStyle={ ACTIVE_STYLES }>Companies</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/jobs" className="nav-link" activeStyle={ACTIVE_STYLES}>Jobs</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/profile" className="nav-link navbar-text" activeStyle={ACTIVE_STYLES}>Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/logout" className="nav-link" activeStyle={ACTIVE_STYLES}>Logout</NavLink>
                    </li>
                </ul>
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
                    <NavLink exact to="/login" className="Navbar-link" activeStyle={ACTIVE_STYLES}>Login</NavLink>
                </li>
            </ul>
        </nav>
    )

    return (
        <>{!user ? loggedOutView : loggedInView }</>
    )
}

export default Nav;