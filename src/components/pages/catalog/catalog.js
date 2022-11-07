import {NavLink} from 'react-router-dom';
import Filter from './filter';
import Footer from '../../footer/footer';

import DecorImg from './decor.svg';
import aboutBeans from './aboutourbeans.png';
import './catalog.css';

const Catalog = () => {
    return (
        <>
            <div className="catalog__header">
                <div className = 'nav'>
                    <ul className="nav__elements">
                        <li className="nav__element"><NavLink end to ='/' style = {{color: '#FFFFFF' , textDecoration : 'inherit'}}>Coffee house</NavLink></li>
                        <li className="nav__element"><NavLink end to ='/catalog' style = {{color: '#FFFFFF' , textDecoration : 'inherit'}}>Our coffee</NavLink></li>
                        <li className="nav__element"><NavLink end to = '/pleasure' style = {{color: '#FFFFFF' , textDecoration : 'inherit'}}>For your pleasure</NavLink></li>
                    </ul>
                </div>

                <h1>Our Coffee</h1>
            </div>

            <div className="about_pleasure">
                <div className="about__elements">
                    <div className="about__img">
                        <img src={aboutBeans} alt="coffee" />
                    </div>

                    <div className="about__descr">
                        <h2>About our beans</h2>
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

            <Filter></Filter>

            <Footer></Footer>
        </>
    )
}

export default Catalog;