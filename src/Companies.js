import React, { useState, useEffect } from 'react' 
import JoblyApi from './JoblyApi'
import Search from './Search'
import CardList from './CardList'
import { paginateData } from './helpers'
import PageButtons from './PageButtons'

function Companies(){
    const [companies, setCompanies] = useState([])
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
        let res;
        //if the searchterm isn't blank then filter by the term
        if(searchTerm !== ""){
            res = await JoblyApi.filterCompanies(searchTerm)
        } else {
            res = await JoblyApi.getCompanies();
        }
        setCompanies(res)
    }

    const list = <div className="CompaniesList">
        <h4>Finding the right company for you is an important part of the job hunt:</h4>
        <Search filter={filterCompanies} className="searchbar" />
        <CardList title={'companies'} items={pages} pageNum={pageNum} className="companylist"/>
        <PageButtons setPageNum={setPageNum} numPages={pages.length} pageNum={pageNum} />
    </div>  

    return (
        <>
            {!pages[0] ? null : list}
        </>
    )
}

export default Companies;