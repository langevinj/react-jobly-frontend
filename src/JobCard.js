import React, { useContext } from 'react' 
import JoblyApi from './JoblyApi'
import './JobCard.css'
import { useLocalStorage } from './hooks'
import { renderJobButton } from './helpers'
import UserContext from './UserContext'

function JobCard({ job = {}, handleApply }){
    const { title, salary, equity } = job;

    const { currUser } = useContext(UserContext)
    // const applyForJob = async (evt) => {
    //     evt.preventDefault()
    //     let res = await JoblyApi.applyToJob(user.user.username, job.id)
    //     setUser(user => ({user: {...user.user, applications: [...user.user.applications, job.id]}}))
    //     toggleJob()
    // }

    // const unApply = async (evt) => {
    //     evt.preventDefault();
    //     let res = await JoblyApi.unapplyToJob(user.user.username, job.id)
    //     let removedArray = user.user.applications.filter(j => j !== job.id)
    //     setUser(user => ({ user: {...user.user, applications: [...removedArray]}}))
    //     toggleJob()
    // }

    const btnApplied = (<button type="button" data-toggle="button" className="Apply btn-secondary rounded" onClick={handleApply} disabled={job.state}>Applied</button>)

    const btnApply = (<button type="button" data-toggle="button" className="Apply btn-primary rounded" onClick={handleApply} disabled={job.state}>Apply</button>)

    return(
        <div className="JobCard">
           <h6>{title}</h6>
           <p>Salary: {salary}</p> 
           <p>Equity: {equity}</p>
            {/* <button type="button" data-toggle="button" className="Apply btn-primary rounded" onClick={handleApply} disabled={job.state}>{currUser.applications.includes(job.id) || job.state ? "Applied" : "Apply"}</button> */}
            {currUser.applications.includes(job.id) || job.state ? btnApplied : btnApply}
           {/* {renderJobButton(user.user.applications, job.id, applyForJob, unApply)} */}
        </div>
    )
}

export default JobCard;