import {NavLink} from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <div className = 'navbar'>
            <ul className="navbar__elements">
                <li className="navbar__element"><NavLink end to ='/' style = {({ isActive }) => ({color: isActive ? '#000000': '#000000'})}>Coffee house</NavLink></li>
                <li className="navbar__element"><NavLink end to ='/catalog' style = {({ isActive }) => ({color: isActive ? '#000000': '#000000'})}>Our coffee</NavLink></li>
                <li className="navbar__element"><NavLink end to = 'pleasure' style = {({ isActive }) => ({color: isActive ? '#000000': '#000000'})}>For your pleasure</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;