import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JoblyApi from './JoblyApi'
import CardList from './CardList'
import './Company.css'

function Company() {
    const [company, setCompany] = useState({
        handle: "",
        name: "",
        description: "",
        numEmployees: 0,
        jobs: [],
        logoUrl: ""
    })
    const [currHandle, setHandle] = useState(null)
    
    //grab the company handle from params
    const { handle } = useParams()


    useEffect(() => {
        async function loadCompany(){
            let res = await JoblyApi.getCompany(handle)
            setCompany(oldCompany => ({ ...oldCompany, ...res}))
            //trigger a rerender if there is a handle now
            if(!currHandle){
                setHandle(res.handle)
            }
        }
        loadCompany()
    }, [currHandle])

    return (
        <div className="Company">
            <h3 className="company-name">{company.name}</h3>
            <h4>{company.description}</h4>
            <CardList title='jobs' items={company.jobs} />
        </div>
    )
}

export default Company;