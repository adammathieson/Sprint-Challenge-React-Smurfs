import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav">
            <div className="nav-header">

                <Link to="/"><h2>Smurf Village</h2></Link>
            </div>
            <NavLink exact to="/" className="activeNavButton">Smurfs</NavLink>
            <NavLink exact to="/smurf-form" className="activeNavButton">Add To Village</NavLink>
        </div>
    )
}

export default NavBar;