import React from 'react'

const SearchBar = ({seatchfield})  => {
return (
    <div className = "pa2"> 
<input onChange = {seatchfield} type = "search" className = "pa3 ba b--green bg-lightest-blue" placeholder = "Search Names"></input>

    </div>
)
}
export default SearchBar