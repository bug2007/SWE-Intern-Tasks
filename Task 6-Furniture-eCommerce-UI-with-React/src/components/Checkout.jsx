import DynamicBanner from "./DynamicBanner";
import Features from "./Features";
import { useSelector, useDispatch } from "react-redux";
import formatPrice from "../data";
import { useActionState } from "react";
import { cartActions } from "../store/cart-slice";


export default function Checkout() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    function handleSubmitCheckoutForm() {
        cart.products.forEach(product => {
            dispatch(cartActions.removeFromCart({id: product.id, quantity: 'full'}))  
        })
        return 'Order placed successfully!'
    }

    const [formState, formAction] = useActionState(handleSubmitCheckoutForm, null)

    return (
        <>
        <DynamicBanner title='Checkout' />
        <div className="checkoutContainer">
            <form action={formAction}>
                <div className="firstColumn">
                    <p>Billing details</p>
                    <div className="names">
                        <div className="first-name">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" required />
                        </div>
                        <div className="last-name">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" required />
                        </div>
                    </div>
                    <div className="company-name">
                        <label htmlFor="company-name">Company Name (Optional)</label>
                        <input type="text" id="company-name" />
                    </div>
                    <div className="country-region">
                        <label htmlFor="country-region">Country / Region</label>
                        <select id="country-region">
                            <option value="Sri Lanka" selected>Bangladesh</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sri Lanka">India</option>
                        </select>
                    </div>
                    <div className="street-address">
                        <label htmlFor="street-address">Street address</label>
                        <input type="text" id="street-address" required />
                    </div>
                    <div className="town-city">
                        <label htmlFor="town-city">Town / City</label>
                        <input type="text" id="town-city" required />
                    </div>
                    <div className="province">
                        <label htmlFor="province">Province</label>
                        <select id="province">
                            <option value="Sri Lanka" selected>Western Province</option>
                            <option value="Sri Lanka">1</option>
                            <option value="Sri Lanka">2</option>
                        </select>
                    </div>
                    <div className="zipCode">
                        <label htmlFor="zipCode">ZIP code</label>
                        <input type="number" id="zipCode" required />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" required />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="additional-info">
                        <input type="text" id="additional-info" placeholder="Additional information" />
                    </div>
                </div>
                <div className="secondColumn">
                    <div className="cartDetails">
                        <div className="heading">
                            <span>Product</span>
                            <span>Subtotal</span>
                        </div>
                        <div className="checkoutProducts">
                            {cart.products.map((product) => 
                            <div key={product.id}>
                                <span><span>{product.title}</span><span>X</span><span>{product.quantity}</span></span>
                                <span>Rs. {formatPrice(product.totalPrice)}</span>
                            </div>)}
                        </div>
                        <div className="checkout-subtotal">
                            <span>Subtotal</span>
                            <span>Rs. {formatPrice(cart.bigTotal)}</span>
                        </div>
                        <div className="checkout-total">
                            <span>Total</span>
                            <span>Rs. {formatPrice(cart.bigTotal)}</span>
                        </div>
                        <p>Payment Method</p>
                        <div className="radio-buttons">
                            <div className="radio-bank">
                                <input name="paymentMethod" type="radio" id="bank" required />
                                <label htmlFor="bank">Direct Bank Transfer</label>
                            </div>
                            <div className="radio-cash">
                                <input name="paymentMethod" type="radio" id="cash" />
                                <label htmlFor="cash">Cash On Delivery</label>
                            </div>
                        </div>
                    </div>
                    <button>Place order</button>
                    {formState && <p className="successMsg">{formState}</p>}
                </div>
            </form>
        </div>
        <Features />
        </>
    )
}

// show the success message first and then set a timeout after which you will remove the items from cart. maybe it's a solution