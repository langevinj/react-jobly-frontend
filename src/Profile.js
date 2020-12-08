import React, { useState, useEffect, useContext, useRef } from 'react'
import EditProfile from './EditProfile'
import JoblyApi from './JoblyApi'
import './Profile.css'
import UserContext from './UserContext'
import './Forms.css'

function Profile() {
    const { currUser, setCurrUser } = useContext(UserContext)
    // const [user, setUser] = useLocalStorage("user")
    // const [editView, setEditView] = useState(false)
    // const [u, setU] = useState(user.user)

    const [formData, setFormData] = useState({
        firstName: currUser.firstName || "",
        lastName: currUser.lastName || "",
        email: currUser.email || "",
        username: currUser.username,
        password: "",
        errors: [],
        saveConfirmed: false
    });

    // const toggleView = () => {
    //     setEditView(!editView)
    // }
    
    //submit changes and update via the backend
    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            let profileData = {
                firstName: formData.firstName || undefined,
                lastName: formData.lastName || undefined,
                email: formData.email || undefined,
                password: formData.password
            };

            let username = formData.username;
            let updatedUser = await JoblyApi.saveProfile(username, profileData);
            console.log("UPDATED USER", updatedUser)
            setFormData(f => ({
                ...f,
                errors: [],
                password: ""
            }));
            setCurrUser(updatedUser);
        } catch (errors) {
            setFormData(f => ({ ...f, errors }));
        }
    }

    function handleChange(evt) {
        const {name, value} = evt.target;
        setFormData(f => ({
            ...f,
            [name]: value,
            errors: []
        }));
    }

    // const staticView = u ? (
     
    // ) : null

    return (
        <div className="EditProfile-card form-container">
            <h2>{formData.username}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Last Name:</label>
                    <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} className="form-control"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Confirm password to make changes:</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="form-control"></input>
                </div>
                <button className="btn-primary rounded" onClick={handleSubmit}>Save Changes</button>
            </form>
        </div>
        // <>{editView ? <EditProfile toggleView={toggleView} u={u} updateUser={updateUser} /> : staticView}</>
    )
}

export default Profile;