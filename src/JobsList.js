import React, { useState, useEffect } from 'react'
import JoblyApi from './JoblyApi'
import Search from './Search'
import CardList from './CardList'
import { useLocalStorage } from './hooks'

function JobsList({toggleJob, jobAdded}) {
    const [jobs, setJobs] = useState([])
    // const [userJobs, setUserJobs] = useLocalStorage("jobs")
    // const [user, setUser] = useLocalStorage("user")
    

    //set the list of jobs upon rendering
    useEffect(() => {
        async function gatherJobs() {
            let res = await JoblyApi.getJobs();
            setJobs(res);
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