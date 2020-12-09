import React from 'react'
import CompanyCard from './CompanyCard'
import JobCard from './JobCard'
import { Link } from 'react-router-dom'
import './Card.css'

function Card({ title, item, apply = () => null, unapply = () => null, id}){

    if(title === 'companies'){
        return (
            <Link to={`/companies/${item.handle}`}>
                <div className="Card-body"><CompanyCard company={item} /></div>
            </Link>
        )
    } else {
        return (
            <div className="Card-body">
                <JobCard job={item} handleApply={() => apply(id)} handleUnApply={() => unapply(id)} />
            </div>
        )
    }
    
}

export default Card;