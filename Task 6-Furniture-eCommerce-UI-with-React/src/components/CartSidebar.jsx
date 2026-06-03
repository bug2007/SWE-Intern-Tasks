import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";

export default function CartSidebar({products, bigTotal}) {
    const dispatch = useDispatch();

    return (
        <>
        <div className="backdrop" onClick={() => dispatch(cartActions.closeCartSidebar())}></div>
        <div className="cartSidebar">
            <p>Shopping Cart</p>
            <hr />
            <div className="itemList">
                {products.length === 0 && <p>You have not added any items in your cart</p>}
                {products.length>0 && products.map((product) => 
                    <li key={product.id}>
                        <img src={product.imgSrc} alt={product.title} />
                        <div>
                            <p>{product.title}</p>
                            <p>{product.quantity} X {product.price}</p>
                        </div>
                    </li>)}
            </div>
        </div>
        </>
    )
}