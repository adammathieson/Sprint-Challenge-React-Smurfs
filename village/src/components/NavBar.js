import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="nav">
            <NavLink exact to="/" className="activeNavButton">Smurfs</NavLink>
            <NavLink exact to="/smurf-form" className="activeNavButton">Add To Village</NavLink>
        </div>
    )
}

export default NavBar;