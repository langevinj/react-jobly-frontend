import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { paginateData } from './helpers'

import JoblyApi from './JoblyApi'
import CardList from './CardList'
import PageButtons from './PageButtons'
import UserContext from './UserContext'
import './Company.css'

function Company() {
    //grab the company handle from params
    const { handle } = useParams();
    const { currUser } = useContext(UserContext)

    const [company, setCompany] = useState(null);
    
    //variables for use with pagination
    const [pageNum, setPageNum] = useState(0)
    const [pages, setPages] = useState([])

    //when the page loads grab all the jobs from the company and set their state based on the user's application status
    useEffect(() => {
        async function loadCompanyAndJobs() {
            const { applications } = currUser;
            const c = await JoblyApi.getCompany(handle);

            //get all the job Ids that have been applied to
            const jobIdsAppliedTo = new Set(applications.map(jobId => jobId));

            //set state for jobs of the company the user has applied to
            c.jobs = c.jobs.map(job => ({
                ...job,
                state: jobIdsAppliedTo.has(job.id) ? "applied" : null
            }));
            setCompany(c)
        }

        loadCompanyAndJobs();
    }, [handle, currUser]);

    //paginate the pages of jobs whenever the company changes
    useEffect(() => {
        function pages() {
            if (company) {
                setPages(pages => (paginateData(company.jobs)))
            }
        }
        pages()
    }, [company]);

    //apply to a job
    async function apply(id) {
        if (company && Array.isArray(company.jobs)){
            let message = await JoblyApi.applyToJob(currUser.username, id);
            setCompany(c => {
                let newCompany = { ...c };
                newCompany.jobs = newCompany.jobs.map(job => job.id === id ? { ...job, state: "applied"} : job);
                return newCompany;
            });
        }
    }

    //unapply from a job
    async function unapply(id) {
        if (company && Array.isArray(company.jobs)){
            let message = await JoblyApi.unapplyToJob(currUser.username, id)
            setCompany(c => {
                let newCompany = { ...c };
                newCompany.jobs = newCompany.jobs.map(job => job.id === id ? { ...job, state: null} : job);
                return newCompany;
            });
        }
    }

    

    //show loading if no company has been received yet
    if (!company) {
        return <div>Loading...</div>
    }

    const list = <><CardList title='jobs' items={pages} pageNum={pageNum} apply={apply} unapply={unapply}/>
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