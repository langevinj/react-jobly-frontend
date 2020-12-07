import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function Login({logIn}) {
    //set initial viewstate to the login form
    const [formView, setFormView] = useState("login")

    //flip between login and signup views
    const toggleView = (evt) => {
        evt.preventDefault()
        setFormView(evt.target.value)
    }

    return (
        <div className="container">
            <div className="toggle-container mb-3">
                <button id="login-toggle" value="login" onClick={toggleView} className="btn-primary mr-1 rounded">Login</button>
                <button id="signup-toggle" value="signup" onClick={toggleView} className="btn-primary rounded ml-1">Sign-Up</button>
            </div>
            <div className="form-container">
                {formView === "login" ? <LoginForm logIn={logIn}/> : <SignupForm logIn={logIn}/>}
            </div>
        </div> 
    )
}

export default Login;