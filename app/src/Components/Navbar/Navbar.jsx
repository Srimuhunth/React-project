import React from 'react'
import './Navbar.css'

function Navbar({ searchQuery, handleSearch }) {
  return (
    <div className="navbar">
        <div className="nav-items">
          <img className="image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQqqEtiw_nQdpadEP28rUBttPkF9obqx_2hQfcXS7a74trQbkji25DSVPI&s=10'></img>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </div>

        <div className="search">
            <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
        </div>
    </div>
  )
}

export default Navbar
