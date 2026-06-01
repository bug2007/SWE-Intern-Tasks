import formatPrice from "../data";

export default function ProductItem({product}) {
    let currentPrice = product.originalPrice;
    let cssClass = 'image-card'
    if (product.discount) {
        currentPrice -= product.discount * currentPrice;
    //     cssClass += ' discount'
    // } else if (product.newComer) {
    //     cssClass += ' newComer'
    }


    return (
        <div className={cssClass}>
            {product.discount && <span className="discount-circle">-{product.discount * 100}%</span>}
            {product.newComer && <span className="newComer-circle">New</span>}
            <img src={product.imgSrc} alt={product.title} />
            <div className="text-content">
                <p>{product.title}</p>
                <p>{product.subtitle}</p>
                <div className="prices">
                    <span className="currentPrice">Rp {formatPrice(currentPrice)}</span>
                    {currentPrice !== product.originalPrice && <span className="originalPrice">Rp {formatPrice(product.originalPrice)}</span>}
                </div>
            </div>
        </div>
    )
}