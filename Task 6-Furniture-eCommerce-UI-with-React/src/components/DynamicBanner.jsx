import arrowImg from '../assets/arrow.png';
import logoImg from '../assets/logo.png';

export default function DynamicBanner({title}) {
    return (
        <div className="dynamic-banner">
            <img src={logoImg} alt="Logo Image" />
            <p>{title}</p>
            <div className='direction'>
                <span>Home</span>
                <img src={arrowImg} alt="" />
                <span>{title === 'Product Comparison' ? 'Comparison' : title}</span>
            </div>
        </div>
    )
}