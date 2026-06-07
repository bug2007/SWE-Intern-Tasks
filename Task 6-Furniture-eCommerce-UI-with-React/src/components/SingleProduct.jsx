import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import arrowImg from '../assets/arrow.png';
import formatPrice from "../data";
import starImg from '../assets/star.png';
import halfStarImg from '../assets/halfStar.png';
import fbImg from '../assets/fb-icon.png';
import linkedinImg from '../assets/linkedin-icon.png';
import twitterImg from '../assets/twitter-icon.png';
import sofa1Img from '../assets/sofa1.png';
import sofa2Img from '../assets/sofa2.png';
import Products from "./Products";
import { cartActions } from "../store/cart-slice";
import { componentSliceActions } from "../store/component-slice";


let para1 = <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>

let para2 = <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>

const stars = [];
for (let i=0; i<4; i++) {
    stars.push(<img className="fullStar" src={starImg} alt="Full star" />)
}
stars.push(<img className="halfStar" src={halfStarImg} alt="Half Star" /> )

export default function SingleProduct() {
    const [activeBtn, setActiveBtn] = useState('L');
    const [activeTab, setActiveTab] = useState(1);
    const [chooseQuantity, setChooseQuantity] = useState(1);
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const product = useSelector(state => state.component.selectedProduct)
    const listedImages = [];
    let key = 0;
    for (let i=0; i < 4; i++){
        listedImages.push(<img key={key} src={product.imgSrc} alt={product.title} />)
        key++;
    }

    let descriptionContent = '';

    if (activeTab === 2) {
        descriptionContent = para1;
    } else if (activeTab === 3) {
        descriptionContent = para2;
    } else {
        descriptionContent = ( <>
        {para1}
        {para2}
        </>)
    }

    function handleIncreaseChooseQuantity() {
        setChooseQuantity(prevState => prevState + 1)
    }

    function handleDecreaseChooseQuantity() {
        setChooseQuantity(prevState => prevState > 1 ? prevState - 1 : prevState)
    }

    function addProdToCart() {
        dispatch(cartActions.addToCart({id: product.id, title: product.title, quantity: chooseQuantity, price: product.currentPrice, imgSrc: product.imgSrc}))
    }

    useEffect(() => {
        setActiveBtn('L');
        setActiveTab(1);
        setChooseQuantity(1)
    }, [product?.id])

    // useEffect(() => {
    //     console.log(cart.products, cart.bigTotal)
    // }, [cart.products])
     
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
                    <div className="text-content">
                        <p className="title">{product.title}</p>
                        <p className="price">Rs. {formatPrice(product.currentPrice)}</p>
                        <div className="stars-vr-review">
                            <span className="stars">{stars}</span>
                            <span className="stars-vr vr"></span>
                            <span className="review">5 Customer Review</span>
                        </div>
                        <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                    </div>
                    <div className="size-buttons">
                        <p className="size">Size</p>
                        <button className={activeBtn === 'L' ? 'active' : ''} onClick={() => setActiveBtn('L')}>L</button>
                        <button className={activeBtn === 'XL' ? 'active' : ''} onClick={() => setActiveBtn('XL')}>XL</button>
                        <button className={activeBtn === 'XS' ? 'active' : ''} onClick={() => setActiveBtn('XS')}>XS</button>
                    </div>
                    <div className="color-buttons">
                        <p className="color">Color</p>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div className="amountCartCompare-buttons">
                        <span className="add-quantity">
                            <button onClick={handleDecreaseChooseQuantity}>-</button>{chooseQuantity}<button onClick={handleIncreaseChooseQuantity}>+</button>
                        </span>
                        <button onClick={addProdToCart}>Add To Cart</button>
                        <button onClick={() => dispatch(componentSliceActions.changePage('ProductComparison'))}>+ Compare</button>
                    </div>
                    <hr />
                    <div className="info">
                        <p>SKU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;SS001</p>
                        <p>Category &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;Sofas</p>
                        <p>Tags &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;Sofa, Chair, Home, Shop</p>
                        <p>Share &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="social-icons">
                                <img src={fbImg} alt="Facebook Icon" />
                                <img src={linkedinImg} alt="Linkedin Icon" />
                                <img src={twitterImg} alt="Twitter Icon" />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="description">
                <ul>
                    <li><a href="" className={activeTab === 1 ? 'active' : null} onClick={(event) => { event.preventDefault();  setActiveTab(1)}}>Description</a></li>
                    <li><a href="" className={activeTab === 2 ? 'active' : null} onClick={(event) => { event.preventDefault();  setActiveTab(2)}}>Additional Information</a></li>
                    <li><a href="" className={activeTab === 3 ? 'active' : null} onClick={(event) => { event.preventDefault();  setActiveTab(3)}}>Reviews [5]</a></li>
                </ul>
                <div className="descriptionContent">
                    {descriptionContent}
                </div>
                <div className="description-images">
                    <img src={sofa1Img} alt="Sofa Image 1" />
                    <img src={sofa2Img} alt="Sofa Image 2" />
                </div>
            </div>
            <Products heading='Related Products' start={0} end={4} button />
        </div>
    )
}
