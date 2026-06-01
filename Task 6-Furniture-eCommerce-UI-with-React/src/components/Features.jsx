import qualityImg from '../assets/quality.png';
import warrantyImg from '../assets/warranty.png';
import shippingImg from '../assets/shipping.png';
import supportImg from '../assets/support.png';

export default function Features() {
    return (
        <div className="features">
            <div className="high-quality">
                <img src={qualityImg} alt="High Quality Image" />
                <div>
                    <p>High Quality</p>
                    <p>Crafted from top materials</p>
                </div>
            </div>
            <div className="warranty-protection">
                <img src={warrantyImg} alt="Warranty Protection Image" />
                <div>
                    <p>Warranty Protection</p>
                    <p>Over 2 years</p>
                </div>
            </div>
            <div className="free-shipping">
                <img src={shippingImg} alt="Free Shipping Image" />
                <div>
                    <p>Free Shipping</p>
                    <p>Order over $150</p>
                </div>
            </div>
            <div className="support">
                <img src={supportImg} alt="Support Image" />
                <div>
                    <p>24 / 7 Support</p>
                    <p>Dedicated support</p>
                </div>
            </div>
        </div>
    )
}