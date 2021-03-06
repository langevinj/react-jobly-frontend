import React, { useState, useEffect, useContext } from 'react'
import { paginateData } from './helpers'
import UserContext from './UserContext'
import JoblyApi from './JoblyApi'
import Search from './Search'
import CardList from './CardList'
import PageButtons from './PageButtons'
import './JobsList.css'

function JobsList() {
    const [jobs, setJobs] = useState([])
    const { currUser } = useContext(UserContext)

    //used for pagination
    const [pageNum, setPageNum] = useState(0)
    const [pages, setPages] = useState([])

    //set the list of jobs upon rendering
    useEffect(function() {
        filterJobs();
    }, []);

    //when the list of jobs changes paginate the pages
    useEffect(() => {
        function paginatePages(){
            setPages(pages => (paginateData(jobs)))
        }
        paginatePages()
    }, [jobs])

    //filter jobs if search bar is used
    const filterJobs = async (searchTerm) => {
        let res = await JoblyApi.getJobs(searchTerm);
        //if the searchterm isn't blank then filter by the term
        setJobs(res.map(job => currUser.applications.includes(job.id) ? {...job, state: "applied"} : {...job}));
    }

    //apply to job and change the message for it in the job list
    async function apply(id){
        let targetJob = jobs.filter(job => (job.id === id))[0]
        let jobId = targetJob.id
        let message = await JoblyApi.applyToJob(currUser.username, jobId);
        setJobs(j => j.map(job=>
            job.id === jobId ? { ...job, state: message} : job
        ))
    }

    //unapply to a job and change the button
    async function unapply(id){
        let targetJob = jobs.filter(j => (j.id === id))[0]
        let message = await JoblyApi.unapplyToJob(currUser.username, targetJob.id);
        setJobs(j => j.map(job =>
            job.id === targetJob.id ? { ...job, state: null} : job
        ));
    }

    const list = 
    <>
        <CardList title='jobs' items={pages} apply={apply} unapply={unapply} pageNum={pageNum} />
        <PageButtons setPageNum={setPageNum} numPages={pages.length} pageNum={pageNum}/>
    </>

    return (
        <div className="JobsList">
            <h4>Applying for jobs is as simple as clicking a button!</h4>
            <Search filter={filterJobs} />
            {!pages[0] ? <div className="mt-3"><p>....no results right now</p></div> : list}
        </div>
    )
}

export default JobsList;