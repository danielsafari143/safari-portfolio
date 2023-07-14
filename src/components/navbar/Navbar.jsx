import { Link } from 'react-router-dom';
import daniel from '../../assets/img/daniel.jpg'
const Navbar = () => {
    return (<header className="header">
        <div className='owner'>
            <img src={daniel} className="image"/>
            <h3>Safari Hamuli</h3>
        </div>
        <Link className='about'>About</Link>
        <Link className='services'>Services</Link>
        <Link className='services'>Projects</Link>
        <Link className='blog'>Blog</Link>
        <button className='contact-btn'>Contact</button>
    </header>)
};
export default Navbar;