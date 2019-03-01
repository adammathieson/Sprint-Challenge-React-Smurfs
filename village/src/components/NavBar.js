import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav">
            <div className="nav-header">
                <Link to="/"><h2>Smurf Village</h2></Link>
            </div>
            <div className="nav-links">
                <NavLink exact to="/" activeClassName="activeNavButton">Smurfs</NavLink>
                <NavLink exact to="/smurf-form" activeClassName="activeNavButton">Add To Village</NavLink>
            </div>
        </div>
    )
}

export default NavBar;