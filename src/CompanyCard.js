import React from 'react'
import './CompanyCard.css'
import { Link } from 'react-router-dom'
import defaultLogo from './defaultLogo.png'

function CompanyCard({ company }) {
    // can use below code if accurate company images are present in the database
    // const logoSource = company.logoUrl ? company.logo_url : defaultLogo

    return(
        <div className="CompanyCard">
                <h6 className="card-title">
                    <span className="title">{company.name}</span>
                    <img className="logo" src={defaultLogo} alt="the company logo"></img>
                </h6>
                <p className="description">{company.description}</p>
        </div>
    )
}

export default CompanyCard;