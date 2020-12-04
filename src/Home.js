import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home({user}) {
    const loggedOutView = (
        <div className="container-fluid bg-light home">
            <div className="row align-items-start">
                <div className="col-12"></div>
            </div>
            <div className="row prompt-row align-items-center">
                <div className="col-4"></div>
                <div className="col-4 login-box rounded">
                    <h2>Jobly</h2>
                    <p>Start the hunt for your next position with us.</p>
                    <Link to="/login"><button type="button" className="btn btn-primary">Login</button></Link>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )

    const loggedInView = (
        <div className="container-fluid bg-light home">
            <div className="row align-items-start">
                <div className="col-12"></div>
            </div>
            <div className="row prompt-row align-items-center">
                <div className="col-4"></div>
                <div className="col-4 login-box rounded">
                    <h2>Jobly</h2>
                    <p>Explore all the job postings we have to offer.</p>
                    <h4>Welcome Back!</h4>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )

    return (
        <>
            {!user ? loggedOutView : loggedInView}
        </>
    )
}

export default Home;