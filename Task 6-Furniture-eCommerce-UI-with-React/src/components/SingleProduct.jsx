import { useSelector } from "react-redux";
import arrowImg from '../assets/arrow.png';

export default function SingleProduct() {
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
            <div className="singleProduct-details">
                <span className="listedImages">
                    {listedImages}
                </span>
                <img className="img-lg" src={product.imgSrc} alt={product.title} />
                
            </div>
        </div>
    )
}

// ///////////////////