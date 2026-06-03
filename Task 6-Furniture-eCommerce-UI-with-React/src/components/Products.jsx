import { PRODUCTS } from "../data";

import ProductItem from "./ProductItem";
import Button from "./Button";

export default function Products({heading, start, end, button}) {
    return (
        <div className="our-products">
            {heading && <p className="heading">{heading}</p>}
            <div className="our-products-flex">
                {PRODUCTS.slice(start, end).map((product) =>  <ProductItem key={product.id} product={product} />)}
            </div>
            {button && <Button type="second-type">Show More</Button>}
        </div>
    )
}