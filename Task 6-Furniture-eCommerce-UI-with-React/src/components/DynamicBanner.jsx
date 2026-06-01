import arrowImg from '../assets/arrow.png';

export default function DynamicBanner({title}) {
    return (
        <div className="dynamic-banner">
            <p>{title}</p>
            <div className='direction'>
                <span>Home</span>
                <img src={arrowImg} alt="" />
                <span>{title}</span>
            </div>
        </div>
    )
}