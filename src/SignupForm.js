import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import JoblyApi from './JoblyApi'

import './Forms.css'

function SignupForm({logIn}) {
    const history = useHistory();

    const INITIAL_STATE = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    //on submission, authorize user in backend, and receive token, then log the user in
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        //register new user
        let res = await JoblyApi.signup(formData)

        //log into the site
        logIn(res, formData.username)

        //clear the form
        setFormData(INITIAL_STATE);

        //redirect to the home page
        history.push("/")
    }

    return (
        <form className="signup-form form-container" onSubmit={handleSubmit}>
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
        </form>
    )
}

export default SignupForm;