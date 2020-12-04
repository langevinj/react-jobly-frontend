import React, { useState } from 'react'

function EditProfile({ u, updateUser }) {
    //keeping track of the old password incase I want to add more validation
    const [formData, setFormData] = useState({
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.email,
        oldPwd: "",
        password: ""
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    //submit changes and update via the backend
    const handleSubmit = async (evt) => {
        evt.preventDefault();

        //remove old password from the object
        delete formData.oldPwd

        //delete password key if no new password was entered
        if (!formData.password) {
            delete formData.password
        }

        await updateUser(formData)
    }

    return (
        <div className="EditProfile-card">
            <h2>{u.username}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange}></input>
                <label htmlFor="email">Last Name:</label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange}></input>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" value={formData.email} onChange={handleChange}></input>
                <label htmlFor="oldPwd">Old Password:</label>
                <input type="password" name="oldPwd" id="oldPwd" value={formData.oldPwd} onChange={handleChange}></input>
                <label htmlFor="password">New Password</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleChange}></input>
                <button>Save Changes</button>
            </form>
        </div>

    )
}

export default EditProfile;
