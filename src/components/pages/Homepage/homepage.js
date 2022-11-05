import {NavLink} from 'react-router-dom';
import Vector from './Vector.svg';
import './homepage.css';
import FirstBest from './815O9ktyfUL.png';
import SecondBest from './91Ryk2gKejL.png';
import ThirdBest from './71qBQnpQFYL.png';
import Footer from '../../footer/footer';
import Decor from '../../decor/decor';

const Homepage = () => {
    return (
        <>
            <div className = 'header header_homepage'>
                <div className = 'nav'>
                    <ul className="nav__elements">
                        <li className="nav__element"><NavLink end to ='/' style = {({ isActive }) => ({color: isActive ? '#FFFFFF': '#FFFFFF'})}>Coffee house</NavLink></li>
                        <li className="nav__element"><NavLink end to ='/catalog' style = {({ isActive }) => ({color: isActive ? '#FFFFFF': '#FFFFFF'})}>Our coffee</NavLink></li>
                        <li className="nav__element"><NavLink end to = 'pleasure' style = {({ isActive }) => ({color: isActive ? '#FFFFFF': '#FFFFFF'})}>For your pleasure</NavLink></li>
                    </ul>
                </div>

                <div className='header_homepage__description'>
                    <h1>Everything You Love About Coffee</h1>
                    <div className="description_decor">
                        <img src={Vector} alt="igm" className="description__img" />
                    </div>
                    <p>We makes every day full of energy and taste</p>
                    <p>Want to try our beans?</p>
                    <button className='description__button' type='button'>More</button>
                    <div className="bottom">1</div>
                </div>
            </div>
            
            <div className="about">
                <h2>About Us</h2>
                <Decor></Decor>
                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    <br></br>
                    <br></br>
                    <br></br>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.</p>
            </div>

            <div className="best">
                <h2 className='title_best'>Our Best</h2>

                <div className="best__elements">
                    <div className="best__element">
                        <img src={FirstBest} alt="first" className="best__element__picture"></img>
                        <p className="best__element__descr">Solimo Coffee Beans 2 kg</p>
                        <p className="best__element__price">10.73$</p>
                    </div>

                    <div className="best__element">
                        <img src={SecondBest} alt="second" className="best__element__picture"></img>
                        <p className="best__element__descr">Presto Coffee Beans 1 kg</p>
                        <p className="best__element__price">15.99$</p>
                    </div>

                    <div className="best__element">
                        <img src={ThirdBest} alt="third" className="best__element__picture"></img>
                        <p className="best__element__descr">AROMISTICO Coffee 1 kg</p>
                        <p className="best__element__price">6.99$</p>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Homepage;
