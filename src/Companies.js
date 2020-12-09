import React, { useState, useEffect } from 'react' 
import JoblyApi from './JoblyApi'
import Search from './Search'
import CardList from './CardList'
import { paginateData } from './helpers'
import PageButtons from './PageButtons'

function Companies(){
    const [companies, setCompanies] = useState([])

    //for use with pagination
    const [pageNum, setPageNum] = useState(0)
    const [pages, setPages] = useState([])

    useEffect(() => {
        async function gatherCompanies(){
            let res = await JoblyApi.getCompanies();
            setCompanies(res);
        }
        gatherCompanies()
    }, [])

    useEffect(() => {
        function paginatePages() {
            setPages(pages => (paginateData(companies)))
        }
        paginatePages()
    }, [companies])

    const filterCompanies =  async (searchTerm) => {
        let res = await JoblyApi.getCompanies(searchTerm);
        setCompanies(res)
    }

    const list = <>
        <CardList title={'companies'} items={pages} pageNum={pageNum} className="companylist" />
        <PageButtons setPageNum={setPageNum} numPages={pages.length} pageNum={pageNum} />
        </>

    return (
        <div className="CompaniesList">
            <h4>Finding the right company for you is an important part of the job hunt:</h4>
            <Search filter={filterCompanies} className="searchbar" />
            {!pages[0] ? <div className="mt-3"><p>....no results right now</p></div> : list}
        </div>  
    )
}

export default Companies;