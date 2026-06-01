import { PRODUCTS } from "../data";

import ProductItem from "./ProductItem";
import Button from "./Button";

export default function Products() {
    return (
        <div className="our-products">
            <p>Our Products</p>
            <div className="our-products-flex">
                {PRODUCTS.map((product) =>  <ProductItem key={product.id} product={product} />)}
            </div>
            <Button type="second-type">Show More</Button>
        </div>
    )
}