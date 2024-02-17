import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar' >
            <div className="navbarLogo">
                <h2><Link to="/">ANANTH VISHW</Link></h2>
            </div>
            <div className="navbarItems">
                <li  > <Link to="/blackhole">Black Holes</Link></li>
                <li  > <Link to="/darkMatter">DarkMatter </Link></li>

            </div>
        </div>
    )
}

export default Navbar
