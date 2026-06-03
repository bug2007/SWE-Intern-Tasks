import { useDispatch } from "react-redux"
import { cartActions } from "../store/cart-slice";

export default function CartSidebar() {
    const dispatch = useDispatch();

    return (
        <>
        <div className="backdrop" onClick={() => dispatch(cartActions.closeCartSidebar())}></div>
        <div className="cartSidebar">
            Cart content
        </div>
        </>
    )
}