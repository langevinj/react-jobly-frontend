import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import LoginForm from './LoginForm'
// import SignupForm from './SignupForm'
import JoblyApi from './JoblyApi'
import './Forms.css'

function Login({ setToken }) {
    const history = useHistory();

    //set initial viewstate to the login form
    const [formView, setFormView] = useState("login")
    //set the initial entered formData to blank
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        errors: []
    });

    //flip between login and signup views
    function loginView() {
        setFormView("login")
    }

    function signupView() {
        setFormView("signup")
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        let data;
        let endpoint;

        if(formView === "signup"){
            //if the field is not required, have undefined as backup
            data = {
                username:  formData.username,
                password: formData.password,
                firstName: formData.firstName || undefined,
                lastName: formData.lastName || undefined,
                email: formData.email || undefined
            };
            endpoint = "register";
        } else {
            data = {
                username: formData.username,
                password: formData.password
            };
            endpoint = "login"
        }

        let token;

        try {
            if(endpoint === 'login'){
                token = await JoblyApi.login(data);
                JoblyApi.token = token;
            } else {
                token = await JoblyApi.signup(data);
                JoblyApi.token = token;
            }
        } catch (err) {
            return setFormData(f => ({ ...f, err }));
        }

        //set the token in local storage
        setToken(token);
        //return to homepage
        history.push("/");
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(f => ({...f, [name]: value }));
    }

    let loginActive = formView === "login";

    const signupForm = (<form className="signup-form form-container" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input name="username" value={formData.username} id="username" onChange={handleChange} type="text" className="form-control"></input>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input name="password" value={formData.password} id="password" onChange={handleChange} type="password" className="form-control"></input>
        </div>
        <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" value={formData.firstName} id="firstName" onChange={handleChange} type="text" className="form-control"></input>
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName" value={formData.lastName} id="lastName" onChange={handleChange} type="text" className="form-control"></input>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input name="email" value={formData.email} id="email" onChange={handleChange} type="text" className="form-control"></input>
        </div>
        <button className="submitButton btn-primary rounded">Submit</button>
    </form>)

    const loginForm = (<form className="login-form form-container" onSubmit={handleSubmit}>
        <h4>Welcome back!</h4>
        <div className="form-group edit">
            <label htmlFor="username">Username: </label>
            <input name="username" value={formData.username} id="username" onChange={handleChange} type="text" className="form-control"></input>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input name="password" value={formData.password} id="password" onChange={handleChange} type="password" className="form-control"></input>
        </div>
        <button className="submitButton btn-primary rounded">Submit</button>
    </form>)


    return (
        <div className="container">
            <div className="toggle-container mb-3">
                <button id="login-toggle" value="login" onClick={loginView} className="btn-primary mr-1 rounded">Login</button>
                <button id="signup-toggle" value="signup" onClick={signupView} className="btn-primary rounded ml-1">Sign-Up</button>
            </div>
            <div className="form-container">
                {loginActive ? loginForm : signupForm}
            </div>
        </div> 
    )
}

export default Login;