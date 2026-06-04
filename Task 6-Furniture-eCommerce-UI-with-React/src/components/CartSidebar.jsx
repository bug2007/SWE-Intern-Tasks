import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";
import formatPrice from "../data";
import removeItemButtonImg from '../assets/removeitembutton.png';
import { componentSliceActions } from "../store/component-slice";
// import { useEffect } from "react";

export default function CartSidebar({products, bigTotal}) {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(products)
    // }, [products])

    return (
        <>
        <div className="backdrop" onClick={() => dispatch(cartActions.closeCartSidebar())}></div>
        <div className="cartSidebar">
            <div className="header">
                <span>Shopping Cart</span>
                <span onClick={() => dispatch(cartActions.closeCartSidebar())}>X</span>
            </div>
            <hr />
            <ul className="itemList">
                {products.length === 0 && <p>You have not added any items in your cart</p>}
                {products.length>0 && products.map((product) => 
                    <li key={product.id}>
                        <img src={product.imgSrc} alt={product.title} />
                        <div>
                            <p>{product.title}</p>
                            <p><span>{product.quantity}</span> <span className="x">X</span> <span>Rs. {formatPrice(product.price)}</span></p>
                        </div>
                        <img src={removeItemButtonImg} onClick={() => dispatch(cartActions.removeFromCart({id: product.id, quantity: 'full'}))} alt="Remove item from cart" />
                    </li>)}
            </ul>
            <div className="subtotal">
                <span>Subtotal</span>
                <span>Rs. {formatPrice(bigTotal)}</span>
            </div>
            <div className="cartSidebar-footer">
                <button onClick={() => { dispatch(cartActions.closeCartSidebar()); dispatch(componentSliceActions.changePage('Cart'))}}>Cart</button>
                <button onClick={() => { dispatch(cartActions.closeCartSidebar()); dispatch(componentSliceActions.changePage('Checkout'))}}>Checkout</button>
                <button onClick={() => { dispatch(cartActions.closeCartSidebar()); dispatch(componentSliceActions.changePage('ProductComparison'))}}>Comparison</button>
            </div>
        </div>
        </>
    )
}