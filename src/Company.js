import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JoblyApi from './JoblyApi'
import CardList from './CardList'
import './Company.css'
import { paginateData } from './helpers'
import PageButtons from './PageButtons'
import UserContext from './UserContext'

function Company() {
    //grab the company handle from params
    const { handle } = useParams()
    const { currUser } = useContext(UserContext)

    const [company, setCompany] = useState(null);
    // const [company, setCompany] = useState({
    //     handle: "",
    //     name: "",
    //     description: "",
    //     numEmployees: 0,
    //     jobs: [],
    //     logoUrl: ""
    // })
    // const [currHandle, setHandle] = useState(null)
    const [pageNum, setPageNum] = useState(0)
    const [pages, setPages] = useState([])

    // useEffect(() => {
    //     async function loadCompanyAndJobs() {
    //         const { applications } = currUser;
    //         const c = await JoblyApi.getCompany(handle);

    //         //get all the job Ids that have been applied to
    //         const jobIdsAppliedTo = new Set(applications.map =>)
    //     }
    // })

    // useEffect(() => {
    //     async function loadCompany(){
    //         let res = await JoblyApi.getCompany(handle)
    //         setCompany(oldCompany => ({ ...oldCompany, ...res}))
    //         //trigger a rerender if there is a handle now
    //         if(!currHandle){
    //             setHandle(res.handle)
    //         }
    //         setPages(pages => (paginateData(company.jobs)))
    //     }
    //     loadCompany()
    // }, [currHandle])

    const list = <><CardList title='jobs' items={pages} pageNum={pageNum}/>
            <PageButtons setPageNum={setPageNum} numPages={pages.length} pageNum={pageNum} /></>

    return (
        <div className="Company">
            <div className="heading-container bg-info rounded">
                <h3 className="company-name">{company.name}</h3>
                <p>{company.description}</p>
            </div>
            {!pages[0] ? null : list}
        </div>
    )
}

export default Company;