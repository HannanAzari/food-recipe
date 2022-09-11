import React from 'react'
import './navbar.css'

const Navbar = ({ search, setSearch, setQuery }) => {
   const updateSearch = (e) => {
    setSearch(e.target.value)
   }
const getSearch = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
}

  return (
    <div className='navbar'>
        <div>
            <h2>Foodie</h2>
        </div>
        <form className='search-form' onSubmit={getSearch}>
            <input className='search-bar' type='text' placeholder='Enter a food name' value={search} onChange={updateSearch}/>
            <button className='search-btn' type='submit'>Search</button>
        </form>

    </div>
  )
}

export default Navbar