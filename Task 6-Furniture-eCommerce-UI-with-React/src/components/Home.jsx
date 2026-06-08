import Navbar from "./Navbar";
import Footer from "./Footer";
import Features from "./Features";
import HomeBanner from "./HomeBanner";
import BrowseRange from "./BrowseRange";
import Products from "./Products";
import Carousel from "./Carousel";
import Gallery from "./Galllery";

export default function Home() {
    return (
        <> 
            <HomeBanner />
            <BrowseRange />
            <Products heading='Our Products' start={0} end={8} button />
            <Carousel />
            <Gallery />
        </>
    )
}
