import formatPrice from "../data";
import { useDispatch, useSelector } from 'react-redux';
import { componentSliceActions } from "../store/component-slice";
import likeIconImg from '../assets/likeIcon.png';
import shareIconImg from '../assets/shareIcon.png';
import compareconImg from '../assets/compareIcon.png';
import { cartActions } from "../store/cart-slice";

export default function ProductItem({product, onSelect}) {
    const currentComponent = useSelector(state => state.component.currentComponent);
    const dispatch = useDispatch();
    
    let currentPrice = product.originalPrice;
    if (product.discount) {
        currentPrice -= product.discount * currentPrice;
    } 

    function handleSelectProduct() {
        dispatch(componentSliceActions.selectProduct({...product, currentPrice}))
        if (currentComponent === 'SingleProduct') {
            dispatch(componentSliceActions.changePage('SingleProduct'))
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            dispatch(componentSliceActions.changePage('SingleProduct'))
            window.scrollTo(0, 0)
        }
    }
 
    return (
        <div className='image-card' onClick={handleSelectProduct}>
            {product.discount && <span className="discount-circle">-{product.discount * 100}%</span>}
            {product.newComer && <span className="newComer-circle">New</span>}
            <div className="overlay">
                <button onClick={(e) => {e.stopPropagation(); dispatch(cartActions.addToCart({id: product.id, title: product.title, quantity: 1, price: currentPrice, imgSrc: product.imgSrc}))}}>Add to cart</button>
                <div className="shareCompareLike">
                    <button onClick={(e) => e.stopPropagation()}><img src={shareIconImg} alt="" /><span>Share</span></button>
                    <button onClick={(e) => { e.stopPropagation(); dispatch(componentSliceActions.changePage('ProductComparison'))}}><img src={compareconImg} alt="" /><span>Compare</span></button>
                    <button onClick={(e) => e.stopPropagation()}><img src={likeIconImg} alt="" /><span>Like</span></button>
                </div>
            </div>
            <img src={product.imgSrc} alt={product.title} />
            <div className="text-content">
                <p>{product.title}</p>
                <p>{product.subtitle}</p>
                <div className="prices">
                    <span className="currentPrice">Rp {formatPrice(currentPrice)}</span>
                    {currentPrice !== product.originalPrice && <span className="originalPrice">Rp {formatPrice(product.originalPrice)}</span>}
                </div>
            </div>
        </div>
    )
}