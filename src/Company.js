import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JoblyApi from './JoblyApi'
import CardList from './CardList'
import './Company.css'
import { paginateData } from './helpers'
import PageButtons from './PageButtons'

function Company({toggleJob}) {
    const [company, setCompany] = useState({
        handle: "",
        name: "",
        description: "",
        numEmployees: 0,
        jobs: [],
        logoUrl: ""
    })
    const [currHandle, setHandle] = useState(null)
    const [pageNum, setPageNum] = useState(0)
    const [pages, setPages] = useState([])
    
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
            setPages(pages => (paginateData(company.jobs)))
        }
        loadCompany()
    }, [currHandle])

    const list = <><CardList title='jobs' items={pages} pageNum={pageNum} toggleJob={toggleJob}/>
            <PageButtons setPageNum={setPageNum} numPages={pages.length} pageNum={pageNum} /></>

    return (
        <div className="Company">
            <h3 className="company-name">{company.name}</h3>
            <h4>{company.description}</h4>
            {!pages[0] ? null : list}
        </div>
    )
}

export default Company;