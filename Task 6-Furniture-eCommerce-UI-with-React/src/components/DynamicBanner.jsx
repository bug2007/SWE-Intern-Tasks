import arrowImg from '../assets/arrow.png';
import logoImg from '../assets/logo.png';
import { componentSliceActions } from '../store/component-slice';
import { useDispatch } from 'react-redux';

export default function DynamicBanner({title}) {
    const dispatch = useDispatch();
    return (
        <div className="dynamic-banner">
            <img src={logoImg} alt="Logo Image" />
            <p>{title}</p>
            <div className='direction'>
                <span onClick={() => dispatch(componentSliceActions.changePage('Home'))}>Home</span>
                <img src={arrowImg} alt="" />
                <span>{title === 'Product Comparison' ? 'Comparison' : title}</span>
            </div>
        </div>
    )
} 