import ShopProducts from "./ShopProducts"
import DynamicBanner from "./DynamicBanner";
import Features from "./Features";

export default function Shop() {
    return (
        <>
            <DynamicBanner title="Shop" />
            <ShopProducts />
            <Features />
        </>
    )
}