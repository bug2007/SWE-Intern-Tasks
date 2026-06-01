import { PRODUCTS } from "../data";

import ProductItem from "./ProductItem";

export default function Products() {
    return (
        <div className="our-products">
            <p>Our Products</p>
            <div className="our-products-flex">
                {PRODUCTS.map((product) =>  <ProductItem key={product.id} product={product} />)}
            </div>
        </div>
    )
}