import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import logoImg from '../assets/logo.png';
import navbarIcon1 from '../assets/navbar-icon1.png';
import navbarIcon2 from '../assets/navbar-icon2.png';
import navbarIcon3 from '../assets/navbar-icon3.png';
import navbarIcon4 from '../assets/navbar-icon4.png';
import { componentSliceActions } from '../store/component-slice';
import { cartActions } from '../store/cart-slice';
import CartSidebar from './CartSidebar';

export default function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        function handleScroll() {
        setScroll(window.scrollY > 0)
        }
        handleScroll(); // setting it immediately as soon as the App renders as on page load, the page might already be scrolled
        window.addEventListener('scroll', handleScroll)
        return () => {
        window.removeEventListener('scroll', handleScroll);
        }
    }, []) 

    function handleLinkClick(event, component) {
        event.preventDefault();
        dispatch(componentSliceActions.changePage(component));
    }  

    return (
        <>
            <div className={(scroll ? 'navbar navbar-scroll' : 'navbar') + (menuOpen ? ' menu-active': '')}>
                <div className='navbar-logoBrand'>
                    <img src={logoImg} alt="Logo Image" />
                    <span>Furniro</span>
                </div>
                <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="" onClick={(event) => handleLinkClick(event, 'Home')}>Home</a></li>
                        <li><a href="" onClick={(event) => handleLinkClick(event, 'Shop')}>Shop</a></li>
                        <li><a href="" onClick={(event) => handleLinkClick(event, 'Blog')}>About</a></li>
                        <li><a href="" onClick={(event) => handleLinkClick(event, 'Contact')}>Contact</a></li>
                    </ul>
                </div>
                <div className={`navbar-icons ${menuOpen ? 'active' : ''}`}>
                    <a href="#"><img src={navbarIcon1} alt="Account alert" /></a>
                    <a href="#"><img src={navbarIcon2} alt="Search" /></a>
                    <a href="#"><img src={navbarIcon3} alt="Heart" /></a>
                    <a href="" onClick={(event) => { event.preventDefault(); dispatch(cartActions.openCartSidebar())}}>
                        <img src={navbarIcon4} alt="Shopping Cart" />
                        <div className=''>{cart.totalQuantity}</div>
                    </a>
                </div>
                
                <i className={`menuToggle bi ${menuOpen ? 'bi-x' : 'bi-list'}`} onClick={() => setMenuOpen(prevState => !prevState)}></i>
            </div>
            {cart.showCartSidebar && <CartSidebar products={cart.products} bigTotal={cart.bigTotal} />}
        </>
    )
} 