import { useSelector } from "react-redux";

export default function SingleProduct() {
    const product = useSelector(state => state.component.selectedProduct)
    return (
        <>
        <img src={product.imgSrc} />
        {product.title}
        </>
    )
}

// ///////////////////