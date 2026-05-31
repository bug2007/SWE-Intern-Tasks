export default function Footer() {
    return (
        <footer>
        <div className="footer">
            <div className="logoAddress">
                <p className="logo">Furniro.</p>
                <p className="address">400 University Drive Suite 200 Coral <br/> Gabies, <br/>FL 33134 USA</p>
            </div>
            <div className="footer-links">
                <p>Links</p>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="footer-help">
                <p>Help</p>
                <ul>
                    <li><a href="">Payment Options</a></li>
                    <li><a href="">Returns</a></li>
                    <li><a href="">Privacy Policies</a></li>
                </ul>
            </div>
            <div className="footer-newsletter">
                <p>Newsletter</p>
                <div className="input-button">
                    <input type="email" placeholder="Enter Your Email Address"/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <hr />
        <p className="copyright">2026 furniro. All rights reserved</p>
        </footer>
    )
}