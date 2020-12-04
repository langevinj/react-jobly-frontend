import React, { useState, useEffect } from 'react'
import JoblyApi from './JoblyApi'
import Search from './Search'
import CardList from './CardList'
import { paginateData } from './helpers'

function JobsList({toggleJob, jobAdded}) {
    const [jobs, setJobs] = useState([])
    const [jobPages, setJobPages] = useState([])
    
    // function pageList(allJobs){
    //     let count = 0;
    //     let perPage = 20;
    //     const pages = [];
    //     while(count < allJobs.length){
    //         let tempArray = []
    //         for(let i=0; i < perPage; i++){
    //             tempArray.push(allJobs[count]);
    //             count++
    //         }
    //         pages.push(tempArray)
    //         tempArray = []
    //     }
    //     return pages
    // }
    //set the list of jobs upon rendering
    useEffect(() => {
        async function gatherJobs() {
            let res = await JoblyApi.getJobs();
            setJobs(res);
            let pages = paginateData(res);
            console.log(pages)
        }
        gatherJobs()
    }, []);

    // const user = JSON.parse(localStorage.getItem("user"))
    // console.log(`User jobs from jobslist is: ${JSON.stringify(user.user.applications)}`)

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

    return (
        <div className="JobsList">
            <Search filter={filterJobs}/>
            <CardList title='jobs' items={jobs} toggleJob={toggleJob}/>
        </div> 
    )
}

export default JobsList;