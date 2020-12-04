import React, { useState, useEffect } from 'react'
import JoblyApi from './JoblyApi'
import Search from './Search'
import CardList from './CardList'
import { paginateData } from './helpers'
import './JobList.css'
import PageButtons from './PageButtons'

function JobsList({toggleJob, jobAdded}) {
    const [jobs, setJobs] = useState([])
    const [pageNum, setPageNum] = useState(0)
    const [pages, setPages] = useState([])

    //set the list of jobs upon rendering
    useEffect(() => {
        async function gatherJobs() {
            let res = await JoblyApi.getJobs();
            setJobs(res);
            setPages(pages => (paginateData(res)))
        }
        gatherJobs()
    }, []);


    //filter jobs if search bar is used
    const filterJobs = async (searchTerm) => {
        let res;
        //if the searchterm isn't blank then filter by the term
        if (searchTerm !== "") {
            res = await JoblyApi.filterJobs(searchTerm)
        } else {
            res = await JoblyApi.getJobs();
        }
        setJobs(res)
    }

    const list = <div className="JobsList">
        <Search filter={filterJobs} />
        <CardList title='jobs' items={pages} toggleJob={toggleJob} pageNum={pageNum} />
        <PageButtons setPageNum={setPageNum} numPages={pages.length} pageNum={pageNum}/>
    </div>

    return (
        <>
            {!pages[0] ? null : list}
        </>
    )
}

export default JobsList;