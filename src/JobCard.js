import React from 'react' 
import JoblyApi from './JoblyApi'
import './JobCard.css'
import { useLocalStorage } from './hooks'
import { renderJobButton } from './helpers'

function JobCard({ job, toggleJob  }){
    const [user, setUser] = useLocalStorage("user")

    const applyForJob = async (evt) => {
        evt.preventDefault()
        let res = await JoblyApi.applyToJob(user.user.username, job.id)
        setUser(user => ({user: {...user.user, applications: [...user.user.applications, job.id]}}))
        toggleJob()
    }

    const unApply = async (evt) => {
        evt.preventDefault();
        let res = await JoblyApi.unapplyToJob(user.user.username, job.id)
        let removedArray = user.user.applications.filter(j => j !== job.id)
        setUser(user => ({ user: {...user.user, applications: [...removedArray]}}))
        toggleJob()
    }

    return(
        <div className="JobCard">
           <h6>{job.title}</h6>
           <p>Salary: {job.salary}</p> 
           <p>Equity: {job.equity}</p>
           {renderJobButton(user.user.applications, job.id, applyForJob, unApply)}
        </div>
    )
}

export default JobCard;