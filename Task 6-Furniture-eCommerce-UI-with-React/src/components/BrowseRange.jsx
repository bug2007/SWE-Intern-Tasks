import livingRoomImg1 from '../assets/living1.png';
import livingRoomImg2 from '../assets/living2.png';
import bedroomRoomImg from '../assets/bedroom.png';

export default function BrowseRange() {
    return (
        <div className="browse-range">
            <p>Browse The Range</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="images">
                <div>
                    <img src={livingRoomImg1} alt="" />
                    <p>Living</p>
                </div>
                <div>
                    <img src={livingRoomImg2} alt="" />
                    <p>Living</p>
                </div>
                <div>
                    <img src={bedroomRoomImg} alt="" />
                    <p>Bedroom</p>
                </div>
            </div>
        </div>
    )
}  