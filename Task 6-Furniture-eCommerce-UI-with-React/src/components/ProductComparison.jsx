import DynamicBanner from "./DynamicBanner";
import Features from "./Features";
import compareImg1 from '../assets/compare1.jpg';
import compareImg2 from '../assets/compare2.jpg';
import starImg from '../assets/star.png';
import halfStarImg from '../assets/halfStar.png';
import { cartActions } from "../store/cart-slice";
import { useDispatch } from 'react-redux';

const stars = [];
for (let i=0; i<4; i++) {
    stars.push(<img className="fullStar" src={starImg} alt="Full star" />)
}
stars.push(<img className="halfStar" src={halfStarImg} alt="Half Star" /> )

export default function ProductComparison() {
    const dispatch = useDispatch();

    return (
        <>
        <DynamicBanner title='Product Comparison' />
        <div className="compareContainer">
            <div className="row1">
                <div className="text-content">
                    <p>Go to Product <br /> page for more <br /> Products</p>
                    <p>View More</p>
                </div>
                <div className="compare1">
                    <img src={compareImg1} alt="Image 1" />
                    <p className="title">Asgaard Sofa</p>
                    <p className="price">Rs. 250,000.00</p>
                    <p>
                        <span className="rating">4.7</span>
                        <span className="second-stars">{stars}</span>
                        <span className="second-vr"></span>
                        <span className="review">204 Review</span>
                    </p>
                </div>
                <div className="compare2">
                    <img src={compareImg2} alt="Image 2" />
                    <p className="title">Outdoor Sofa Set</p>
                    <p className="price">Rs. 224,000.00</p>
                    <p>
                        <span className="rating">4.2</span>
                        <span className="second-stars">{stars}</span>
                        <span className="second-vr"></span>
                        <span className="review">145 Review</span>
                    </p>
                </div>
                <div className="chooseProd">
                    <p>Add A Product</p>
                    <select name="chooseProd" id="chooseProd">
                        <option value="" disabled selected>Choose a Product</option>
                        <option value="Asgaard Sofa">Asgaard Sofa</option>
                        <option value="Outdoor Sofa Set">Outdoor Sofa Set</option>
                    </select>
                </div>
            </div>
            <div className="row2">
                <div>General</div>
                <div></div>
                <div></div>
                <div></div>

                <div><p>Sales Package</p></div>
                <div><p>1 sectional sofa</p></div>
                <div><p>1 Three Seater, 2 Single Seater</p></div>
                <div></div>
                <div><p>Model Number</p></div>
                <div><p>TFCBLIGRBL6SRHS</p></div>
                <div><p>DTUBLIGRBL568</p></div>
                <div></div>
                <div><p>Secondary Material</p></div>
                <div><p>Solid Wood</p></div>
                <div><p>Solid Wood</p></div>
                <div></div>
                <div><p>Configuration</p></div>
                <div><p>L-shaped</p></div>
                <div><p>L-shaped</p></div>
                <div></div>
                <div><p>Upholstery Material</p></div>
                <div><p>Fabric + Cotton</p></div>
                <div><p>Fabric + Cotton</p></div>
                <div></div>
                <div><p>Upholstery Color</p></div>
                <div><p>Bright Grey & Lion</p></div>
                <div><p>Bright Grey & Lion</p></div>
                <div></div>


                <div>Product</div>
                <div></div>
                <div></div>
                <div></div>

                <div><p>Filling Material</p></div>
                <div><p>Foam</p></div>
                <div><p>Matte</p></div>
                <div></div>
                <div><p>Finish Type</p></div>
                <div><p>Bright Grey & Lion</p></div>
                <div><p>Bright Grey & Lion</p></div>
                <div></div>

                <div><p>Adjustable Headrest</p></div>
                <div><p>No</p></div>
                <div><p>yes</p></div>
                <div></div>
                <div><p>Maximum Load Capacity</p></div>
                <div><p>280 KG</p></div>
                <div><p>300 KG</p></div>
                <div></div>
                <div><p>Origin of Manufacture</p></div>
                <div><p>India</p></div>
                <div><p>India</p></div>
                <div></div>

                <div>Dimensions</div>
                <div></div>
                <div></div>
                <div></div>

                <div><p>Width</p></div>
                <div><p>265.32 cm</p></div>
                <div><p>265.32 cm</p></div>
                <div></div>
                <div><p>Height</p></div>
                <div><p>76 cm</p></div>
                <div><p>76 cm</p></div>
                <div></div>
                <div><p>Depth</p></div>
                <div><p>167.76 cm</p></div>
                <div><p>167.76 cm</p></div>
                <div></div>
                <div><p>Weight</p></div>
                <div><p>45 KG</p></div>
                <div><p>65 KG</p></div>
                <div></div>
                <div><p>Seat Height</p></div>
                <div><p>41.52 cm</p></div>
                <div><p>41.52 cm</p></div>
                <div></div>

                <div><p>Leg Height</p></div>
                <div><p>5.46 cm</p></div>
                <div><p>5.46 cm</p></div>
                <div></div>

                <div>Warranty</div>
                <div></div>
                <div></div>
                <div></div>

                
                <div><p>Warranty Summary</p></div>
                <div><p>1 Year Manufacturing Warranty</p></div>
                <div><p>1.2 Year Manufacturing Warranty</p></div>
                <div></div>
                <div><p>Warranty Service Type</p></div>
                <div><p>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurnitu <br />re.com</p></div>
                <div><p>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p></div>
                <div></div>
                
                <div><p>Covered in Warranty</p></div>
                <div><p>Warranty Against Manufacturing Defect</p></div>
                <div><p>Warranty of the product is limited to manufacturing defects only.</p></div>
                <div></div>

                <div><p>Not Covered in Warranty</p></div>
                <div><p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p></div>
                <div><p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p></div>
                <div></div>

                <div><p>Domestic Warranty</p></div>
                <div><p>1 Year</p></div>
                <div><p>3 Months</p></div>
                <div></div>

                <div></div>

                <div><button onClick={() => dispatch(cartActions.addToCart({id: 'sofa1', title: 'Asgaard Sofa', quantity: 1, price: 250000, imgSrc: compareImg1}))}>Add To Cart</button></div>
                <div><button onClick={() => dispatch(cartActions.addToCart({id: 'sofa2', title: 'Outdoor Sofa Set', quantity: 1, price: 224000, imgSrc: compareImg2}))}>Add To Cart</button></div>
            </div>
        </div>
        <Features />
        </>
    )
}