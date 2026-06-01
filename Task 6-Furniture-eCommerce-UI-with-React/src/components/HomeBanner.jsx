import Button from "./Button";

export default function HomeBanner() {
    return (
        <div className="home-banner">
            <div className="text-content">
                <p>New Arrival</p>
                <p>Discover Our <br />New Collection</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
                <Button type="first-type">BUY NOW</Button>
            </div>
        </div>
    )
}