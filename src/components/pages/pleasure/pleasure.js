import {NavLink} from 'react-router-dom';

import Footer from '../../footer/footer';
import CoffeineCalc from './calculator';
import DecorImg from './decor.svg'
import coffee from './coffee.png';
import './pleasure.css';

const Pleasure = () => {
    return (
        <>
            <div className="header_pleasure">
                <div className = 'nav'>
                    <ul className="nav__elements">
                        <li className="nav__element"><NavLink end to ='/' style = {({ isActive }) => ({color: isActive ? '#FFFFFF': '#FFFFFF'})}>Coffee house</NavLink></li>
                        <li className="nav__element"><NavLink end to ='/catalog' style = {({ isActive }) => ({color: isActive ? '#FFFFFF': '#FFFFFF'})}>Our coffee</NavLink></li>
                        <li className="nav__element"><NavLink end to = 'pleasure' style = {({ isActive }) => ({color: isActive ? '#FFFFFF': '#FFFFFF'})}>For your pleasure</NavLink></li>
                    </ul>
                </div>

                <h1 className='title_pleasure'>For your pleasure</h1>
            </div>

            <div className="about_pleasure">
                <div className="about__elements">
                    <div className="about__img">
                        <img src={coffee} alt="coffee" />
                    </div>

                    <div className="about__descr">
                        <h2>About our goods</h2>
                        <div className="decor_pleasure">
                            <img src={DecorImg} alt="img" className="decor__img_pleasure" />
                        </div>
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br></br>
                            <br></br>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                            <br></br>
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                    </div>
                </div>

                <hr className='about__element'></hr>
            </div>

            <CoffeineCalc></CoffeineCalc>

            <Footer></Footer>
        </>
    )
}

export default Pleasure;