import React, { useState, useEffect } from 'react'
import EditProfile from './EditProfile'
import { useLocalStorage } from './hooks'
import JoblyApi from './JoblyApi'

function Profile() {
    const [user, setUser] = useLocalStorage("user")
    const [editView, setEditView] = useState(false)
    const [u, setU] = useState(user.user)

    const toggleView = () => {
        setEditView(!editView)
    }

    useEffect(() => {
        function loadU() {
            setU(user.user)
        }
        loadU()
    }, [editView, user.user])

    const updateUser = async (updatedInfo) => {
        let res = await JoblyApi.updateUser(user.user.username, updatedInfo)
        setUser({ user: { ...res.user, applications: [...user.user.applications] } })
        toggleView()
    }

    const staticView = u ? (
        <div className="Profile-card">
            <h2>{u.username}</h2>
            <h3>{u.firstName}</h3>
            <h3>{u.lastName}</h3>
            <h3>{u.email}</h3>
            <button onClick={toggleView}>Edit Profile</button>
        </div>
    ) : null

    return (
        <>{editView ? <EditProfile toggleView={toggleView} u={u} updateUser={updateUser} /> : staticView}</>
    )
}

export default Profile;