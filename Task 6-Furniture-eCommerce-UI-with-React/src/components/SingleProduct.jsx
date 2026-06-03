import { useSelector } from "react-redux";
import { useState } from "react";
import arrowImg from '../assets/arrow.png';
import formatPrice from "../data";
import starImg from '../assets/star.png';
import halfStarImg from '../assets/halfStar.png';

const stars = [];
for (let i=0; i<4; i++) {
    stars.push(<img src={starImg} alt="Full star" />)
}
stars.push(<img src={halfStarImg} alt="Half Star" /> )

export default function SingleProduct() {
    const [activeBtn, setActiveBtn] = useState('L');

    const product = useSelector(state => state.component.selectedProduct)
    const listedImages = [];
    let key = 0;
    for (let i=0; i < 4; i++){
        listedImages.push(<img key={key} src={product.imgSrc} alt={product.title} />)
        key++;
    }

    return (
        <div className="singleProduct">
            <div className="singleProduct-direction">
                <span>Home</span>
                <img src={arrowImg} alt="Arrow Image" />
                <span>Shop</span>
                <img src={arrowImg} alt="Arrow Image" />
                <span className="vr"></span>
                <span>{product.title}</span>
            </div>
            <div className="singleProduct-overview">
                <span className="listedImages">
                    {listedImages}
                </span>
                <img className="img-lg" src={product.imgSrc} alt={product.title} />
                <div className="singleProduct-details">
                    <p className="title">{product.title}</p>
                    <p className="price">{formatPrice(product.currentPrice)}</p>
                    <span className="stars">{stars}</span>
                    <span className="stars-vr vr"></span>
                    <span className="review">5 Customer Review</span>
                    <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                    <div className="size-buttons">
                        <p>Size</p>
                        <button className={activeBtn === 'L' ? 'active' : ''} onClick={() => setActiveBtn('L')}>L</button>
                        <button className={activeBtn === 'XL' ? 'active' : ''} onClick={() => setActiveBtn('XL')}>XL</button>
                        <button className={activeBtn === 'XS' ? 'active' : ''} onClick={() => setActiveBtn('XS')}>XS</button>
                    </div>
                    <div className="color-buttons">
                        <p>Color</p>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div className="amountCartCompare-buttons">
                        <span className="add-quantity">
                            <button>-</button>1<button>+</button>
                        </span>
                        <button>Add To Cart</button>
                        <button>+ Compare</button>
                    </div>
                    <hr />
                    <p>SKU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;SS001</p>
                    <p>Category &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;SS001</p>
                    <p>Tags &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;SS001</p>
                    <p>Share &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;SS001</p>
                </div>
            </div>
        </div>
    )
}

// ///////////////////