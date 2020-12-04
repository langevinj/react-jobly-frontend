import React, { useState, useEffect } from 'react' 
import JoblyApi from './JoblyApi'
import Search from './Search'
import CardList from './CardList'

function Companies(){
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        async function gatherCompanies(){
            let res = await JoblyApi.getCompanies();
            setCompanies(res);
        }
        gatherCompanies()
    }, [])

    const filterCompanies =  async (searchTerm) => {
        let res;
        //if the searchterm isn't blank then filter by the term
        if(searchTerm !== ""){
            res = await JoblyApi.filterCompanies(searchTerm)
        } else {
            res = await JoblyApi.getCompanies();
        }
        setCompanies(res)
    }

    return(
        <div className="CompaniesList">
            <Search filter={filterCompanies}/>
            <CardList title={'companies'} items={companies} />
        </div>  
    )
}

export default Companies;