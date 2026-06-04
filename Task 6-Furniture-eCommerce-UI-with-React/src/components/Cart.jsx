import DynamicBanner from "./DynamicBanner";
import Features from "./Features";
import { useSelector, useDispatch } from "react-redux";
import formatPrice from "../data";
import trashImg from '../assets/trashicon.png';
import { cartActions } from "../store/cart-slice";
import { useEffect } from "react";
import { componentSliceActions } from "../store/component-slice";

export default function Cart() {
    const products = useSelector(state => state.cart.products);
    const bigTotal = useSelector(state => state.cart.bigTotal);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <>
       <DynamicBanner title='Cart' />
       <div className="cartContainer">
        {products.length === 0 && <p className="no-item-text">You have no items in your cart</p>}
            {products.length > 0 && 
            (<>
            <table className="itemTable">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) =>
                        <tr key={product.id}>
                            <td><img className="product-image" src={product.imgSrc} alt="Product Image" /></td>
                            <td>{product.title}</td>
                            <td>Rs. {formatPrice(product.price)}</td>
                            <td><span><span className="minus" onClick={() => dispatch(cartActions.removeFromCart({id: product.id, quantity: 'one'}))}>-</span>{product.quantity}<span className="+" onClick={() => dispatch(cartActions.addToCart({...product, quantity: 1}))}>+</span></span></td>
                            <td>Rs. {formatPrice(product.totalPrice)}</td>
                            <td><img onClick={() => dispatch(cartActions.removeFromCart({id: product.id, quantity: 'full'}))} className="trash-icon" src={trashImg} alt="Delete item from cart" /></td>
                        </tr>)}
                </tbody>
            </table>
            <div className="cartTotalsContainer">
                <p>Cart Totals</p>
                <div className="cartTotals-subtotal">
                    <span>Subtotal</span>
                    <span>Rs. {formatPrice(bigTotal)}</span>
                </div>
                <div className="cartTotals-total">
                    <span>Total</span>
                    <span>Rs. {formatPrice(bigTotal)}</span>
                </div>
                <button onClick={() => dispatch(componentSliceActions.changePage('Checkout'))}>Check Out</button>
            </div>
            </>)}
       </div>
       <Features />
        </>
    )
}