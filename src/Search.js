import React, { useState, useRef }  from 'react'
import { debounce } from 'lodash'
import './Forms.css'

function Search({ filter }){
    const [searchTerm, setSearchTerm] = useState("")

    //live search after a second of the user not typing
    const debouncedSearch = useRef(debounce(term => filter(term), 1000)).current;

    const handleChange = (evt) => {
        const term = evt.target.value.length > 0 ? evt.target.value : ""
        setSearchTerm(term)
        debouncedSearch(term)
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        filter(searchTerm)
        setSearchTerm("")
    }

    return (
         <form className="Search-bar mt-5 form-container" onSubmit={handleSubmit}>
             <div className="input-group">
                <input type="text" placeholder="Search..." name="term" id="term" onChange={handleChange} value={searchTerm} className="form-control" aria-describedby="button-addon1"></input>
                <button className="btn-primary rounded" id="button-addon1">Search</button>
             </div>
         </form>
    )
}

export default Search;