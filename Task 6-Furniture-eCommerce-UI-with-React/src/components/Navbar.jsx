import logoImg from '../assets/logo.png';
import navbarIcon1 from '../assets/navbar-icon1.png';
import navbarIcon2 from '../assets/navbar-icon2.png';
import navbarIcon3 from '../assets/navbar-icon3.png';
import navbarIcon4 from '../assets/navbar-icon4.png';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logoBrand'>
                <img src={logoImg} alt="Logo Image" />
                <span>Furniro</span>
            </div>
            <div className='navbar-links'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className='navbar-icons'>
                <a href=""><img src={navbarIcon1} alt="Account alert" /></a>
                <a href=""><img src={navbarIcon2} alt="Search" /></a>
                <a href=""><img src={navbarIcon3} alt="Heart" /></a>
                <a href=""><img src={navbarIcon4} alt="Shopping Cart" /></a>
            </div>
        </div>
    )
}