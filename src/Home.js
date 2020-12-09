import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import UserContext from './UserContext'
import './Home.css'

//Component for rendering the homepage
function Home() {
    //get the current user
    const { currUser } = useContext(UserContext);

    //prompt box if user logged out
    const loggedOutView = <><p>Start the hunt for your next position with us.</p>
        <Link to="/login"><button type="button" className="btn btn-primary">Login</button></Link></>

    //welcome box if user logged in
    const loggedInView = <><p>Explore all the job postings we have to offer.</p>
        <h4>Welcome Back!</h4></>

    return (
        <div className="container-fluid bg-light home">
            <div className="row align-items-start">
                <div className="col-12"></div>
            </div>
            <div className="row prompt-row align-items-center">
                <div className="col-4"></div>
                <div className="col-4 login-box rounded">
                    <h2>Jobly</h2>
                    {currUser ? loggedInView : loggedOutView}
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default Home;