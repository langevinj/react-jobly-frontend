import React from 'react'
import './CompanyCard.css'
import { Link } from 'react-router-dom'

function CompanyCard({ company }) {
    const logoSource = company.logo_url ? company.logo_url : './defaultLogo.png'

    return(
        <div className="CompanyCard">
                <h6 className="card-title">
                    <span className="title">{company.name}</span>
                    <img className="logo" src={logoSource}></img>
                </h6>
                <p className="description">{company.description}</p>
        </div>
    )
}

export default CompanyCard;