
import DecorImg from './decor.svg';
import './decor.css';

const Decor = () => {
    return (
        <div className="decor">
            <img src={DecorImg} alt="img" className="decor__img" />
        </div>
    )
}

export default Decor;

