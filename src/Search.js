import React, { useState }  from 'react'
import { debounce } from 'lodash'
import './Forms.css'

function Search({ filter }){
    const [searchTerm, setSearchTerm] = useState({term: ""})

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setSearchTerm(oldTerm => ({
            ...oldTerm,
            [name]: value
        }));
        debounceSearch()
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        filter(searchTerm.term)
        setSearchTerm({term: ""})
    }

    //search after 1sec of resting keyboard
    const debounceSearch = debounce(() => filter(searchTerm.term), 1000);

    return (
         <form className="Search-bar mt-5 form-container" onSubmit={handleSubmit}>
             <div className="input-group">
                <input type="text" placeholder="Search..." name="term" id="term" onChange={handleChange} value={searchTerm.term} className="form-control" aria-describedby="button-addon1"></input>
                <button className="btn-primary rounded" type="button" id="button-addon1">Search</button>
             </div>
         </form>
    )
}

export default Search;