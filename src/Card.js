import React from 'react'
import CompanyCard from './CompanyCard'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'
import './Card.css'

function Card({ title, item, toggleJob }){

    if(title === 'companies'){
        return (
            <Link to={`/companies/${item.handle}`}>
                <div className="Card-body"><CompanyCard company={item} /></div>
            </Link>
        )
    } else {
        return (
            <div className="Card-body">
                <JobCard job={item} toggleJob={toggleJob}/>
            </div>
        )
    }
    
}

export default Card;