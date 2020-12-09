import React from 'react' 
import './JobCard.css'

function JobCard({ job = {}, handleApply, handleUnApply }){
    const { title, salary, equity } = job;
  
    const btnApplied = (<button type="button" data-toggle="button" className="Apply btn-secondary rounded" onClick={handleUnApply}>Applied</button>)

    const btnApply = (<button type="button" data-toggle="button" className="Apply btn-primary rounded" onClick={handleApply}>Apply</button>)

    return(
        <div className="JobCard">
           <h6>{title}</h6>
           <p>Salary: {salary}</p> 
           <p>Equity: {equity}</p>
            {job.state ? btnApplied : btnApply}
        </div>
    )
}

export default JobCard;