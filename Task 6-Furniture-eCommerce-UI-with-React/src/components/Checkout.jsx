import DynamicBanner from "./DynamicBanner";
import Features from "./Features";
import { useSelector, useDispatch } from "react-redux";
import formatPrice from "../data";
import { useActionState } from "react";
import { cartActions } from "../store/cart-slice";


export default function Checkout() {
    const cart = useSelector(state => state.cart);
    const products = cart.products;
    const bigTotal = cart.bigTotal;
    const dispatch = useDispatch();

    function handleSubmitCheckoutForm(prevFormState, fd) {
        const firstName = fd.get('firstName');
        const lastName = fd.get('lastName');
        const companyName = fd.get('companyName');
        const countryRegion = fd.get('countryRegion');
        const address = fd.get('address');
        const townCity = fd.get('townCity');
        const province = fd.get('province');
        const zipCode = fd.get('zipCode');
        const phone = fd.get('phone');
        const email = fd.get('email');
        const additionalInfo = fd.get('additionalInfo');
        const paymentMethod = fd.get('paymentMethod');

        const savedProducts = structuredClone(products);
        const savedTotal = bigTotal;


        dispatch(cartActions.clearCart());

        return {successMsg: 'Order placed successfully! Cart is cleared.', products: savedProducts, bigTotal: savedTotal, enteredValues: {firstName, lastName, companyName, countryRegion, address, townCity, province, zipCode, phone, email, additionalInfo, paymentMethod}}
    }

    const [formState, formAction] = useActionState(handleSubmitCheckoutForm, null)
    const productsToDisplay = formState?.products || products;
    const bigTotalToDisplay = formState?.bigTotal || bigTotal;
    
    return (
        <>
        <DynamicBanner title='Checkout' />
        <div className="checkoutContainer">
            {productsToDisplay.length === 0 && <p className="noItemMsg">No items in your cart to checkout</p>}
            {productsToDisplay.length > 0 && 
            <form action={formAction}>
                <div className="firstColumn">
                    <p>Billing details</p>
                    <div className="names">
                        <div className="first-name">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" name="firstName" id="first-name" required defaultValue={formState?.enteredValues?.firstName} />
                        </div>
                        <div className="last-name">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" name="lastName" id="last-name" required defaultValue={formState?.enteredValues?.lastName} />
                        </div>
                    </div>
                    <div className="company-name">
                        <label htmlFor="company-name">Company Name (Optional)</label>
                        <input type="text" name="companyName" id="company-name" defaultValue={formState?.enteredValues?.companyName} />
                    </div>
                    <div className="country-region">
                        <label htmlFor="country-region">Country / Region</label>
                        <select id="country-region" name="countryRegion" defaultValue={formState?.enteredValues?.countryRegion}>
                            <option value="Bangladesh" selected>Bangladesh</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="India">India</option>
                        </select>
                    </div>
                    <div className="street-address">
                        <label htmlFor="street-address">Street address</label>
                        <input type="text" id="street-address" name="address" required defaultValue={formState?.enteredValues?.address} />
                    </div>
                    <div className="town-city">
                        <label htmlFor="town-city">Town / City</label>
                        <input type="text" id="town-city" name="townCity" required defaultValue={formState?.enteredValues?.townCity} />
                    </div>
                    <div className="province">
                        <label htmlFor="province">Province</label>
                        <select id="province" name="province" defaultValue={formState?.enteredValues?.province}>
                            <option value="Sri Lanka" selected>Western Province</option>
                            <option value="Sri Lanka">1</option>
                            <option value="Sri Lanka">2</option>
                        </select>
                    </div>
                    <div className="zipCode">
                        <label htmlFor="zipCode">ZIP code</label>
                        <input type="number" id="zipCode" name="zipCode" required defaultValue={formState?.enteredValues?.zipCode} />
                    </div>
                    <div className="phone">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" pattern="[0-9]{7,15}" title="Please enter a valid phone number containing only numbers (7-15 digits)." required name="phone" defaultValue={formState?.enteredValues?.phone} />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" name="email" required defaultValue={formState?.enteredValues?.email} />
                    </div>
                    <div className="additional-info">
                        <input type="text" id="additional-info" name="additionalInfo" placeholder="Additional information" defaultValue={formState?.enteredValues?.additionalInfo} />
                    </div>
                </div>
                <div className="secondColumn">
                    <div className="cartDetails">
                        <div className="heading">
                            <span>Product</span>
                            <span>Subtotal</span>
                        </div>
                        <div className="checkoutProducts">
                            {productsToDisplay.map((product) => 
                            <div className="product" key={product.id}>
                                <span><span>{product.title}</span><span>X</span><span>{product.quantity}</span></span>
                                <span>Rs. {formatPrice(product.totalPrice)}</span>
                            </div>)}
                        </div>
                        <div className="checkout-subtotal">
                            <span>Subtotal</span>
                            <span>Rs. {formatPrice(bigTotalToDisplay)}</span>
                        </div>
                        <div className="checkout-total">
                            <span>Total</span>
                            <span>Rs. {formatPrice(bigTotalToDisplay)}</span>
                        </div>
                        <hr className="checkout-hr"/>
                        <p className="paymentMethod-heading">Payment Method</p>
                        <div className="radio-buttons">
                            <div className="radio-bank">
                                <input value="bank" name="paymentMethod" type="radio" id="bank" required defaultChecked={formState?.enteredValues?.paymentMethod === 'bank'} />
                                <label htmlFor="bank">Direct Bank Transfer</label>
                            </div>
                            <div className="radio-cash">
                                <input value="cash" name="paymentMethod" type="radio" id="cash" defaultChecked={formState?.enteredValues?.paymentMethod === 'cash'} />
                                <label htmlFor="cash">Cash On Delivery</label>
                            </div>
                        </div>
                    </div>
                    <button className="orderBtn" disabled={formState}>Place order</button>
                    {formState?.successMsg && (<div className="successMsg"><p>{formState.successMsg}</p></div>)}
                </div>
            </form>}
        </div>
        <Features />
        </>
    )
}

// cursor: not-allowed; /* Changes the mouse pointer to a circle with a line through it */