import React, { useState }  from 'react'
import JoblyApi from './JoblyApi'

function Search({ filter }){
    const [searchTerm, setSearchTerm] = useState({term: ""})

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setSearchTerm(oldTerm => ({
            ...oldTerm,
            [name]: value
        }));
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        filter(searchTerm.term)
        setSearchTerm({term: ""})
    }

    return (
         <form className="Search-bar" onSubmit={handleSubmit}>
             <input type="text" placeholder="Search..." name="term" id="term" onChange={handleChange} value={searchTerm.term}></input>
             <button>Search</button>
         </form>
    )
}

export default Search;