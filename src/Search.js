import React, { useState }  from 'react'
import { debounce } from 'lodash'

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

    const debounceSearch = debounce(() => filter(searchTerm.term), 1000);

    

    return (
         <form className="Search-bar" onSubmit={handleSubmit}>
             <input type="text" placeholder="Search..." name="term" id="term" onChange={handleChange} value={searchTerm.term}></input>
             <button>Search</button>
         </form>
    )
}

export default Search;