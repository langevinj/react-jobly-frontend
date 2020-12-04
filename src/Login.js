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
            <div className="toggle-container">
            <button id="login-toggle" value="login" onClick={toggleView}>Login</button>
            <button id="signup-toggle" value="signup" onClick={toggleView}>Sign-Up</button>
            </div>
            <div className="form-container">
                {formView === "login" ? <LoginForm logIn={logIn}/> : <SignupForm logIn={logIn}/>}
            </div>
        </div> 
    )
}

export default Login;