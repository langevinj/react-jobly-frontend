import React, { useState } from 'react'
import JoblyApi from './JoblyApi'
import { useHistory } from 'react-router-dom'

function LoginForm({logIn}) {
    const history = useHistory();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    //on submission, authorize user in backend, and receive token, then log user in
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        //authenticate user credentials
        let res = await JoblyApi.login(formData.username, formData.password)

        //log into the site
        logIn(res, formData.username)

        //clear the form
        setFormData({username: "", password: ""});
        
        //redirect to the home page
        history.push("/")
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input name="username" value={formData.username} id="username" onChange={handleChange} type="text"></input>
            <label htmlFor="password">Password</label>
            <input name="password" value={formData.password} id="password" onChange={handleChange} type="password"></input>
            <button className="submitButton">Submit</button>
        </form>
    )
}

export default LoginForm;