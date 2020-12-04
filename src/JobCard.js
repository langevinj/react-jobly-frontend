import React from 'react' 
import JoblyApi from './JoblyApi'
import './JobCard.css'
import { useLocalStorage } from './hooks'
import { useHistory } from 'react-router-dom'
import { renderJobButton } from './helpers'

function JobCard({ job }){
    const [user, setUser] = useLocalStorage("user")
    const history = useHistory();

    const applyForJob = async (evt) => {
        evt.preventDefault()
        let res = await JoblyApi.applyToJob(user.user.username, job.id)
        setUser(user => ({user: {...user.user, applications: [...user.user.applications, job.id]}}))
    }

    const unApply = async (evt) => {
        evt.preventDefault();
        let res = await JoblyApi.unapplyToJob(user.user.username, job.id)
        let oldApplications = [...user.user.applications]
        const idx = oldApplications.indexOf(job.id)
        if(idx > -1){
            oldApplications.splice(idx, 1);
        }
        setUser(user => ({ user: { ...user.user, applications: [...oldApplications ]}}))
        history.push("/jobs")
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