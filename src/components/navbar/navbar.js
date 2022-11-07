import {NavLink} from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <div className = 'navbar'>
            <ul className="navbar__elements">
                <li className="navbar__element"><NavLink end to ='/' style = {{color: '#000000' , textDecoration : 'inherit'}}>Coffee house</NavLink></li>
                <li className="navbar__element"><NavLink end to ='/catalog' style = {{color: '#000000' , textDecoration : 'inherit'}}>Our coffee</NavLink></li>
                <li className="navbar__element"><NavLink end to = '/pleasure' style = {{color: '#000000' , textDecoration : 'inherit'}}>For your pleasure</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;