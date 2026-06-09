import galImg1 from '../assets/galImg1.png';
import galImg2 from '../assets/galImg2.png';
import galImg3 from '../assets/galImg3.png';
import galImg4 from '../assets/galImg4.png';
import galImg5 from '../assets/galImg5.png';
import galImg6 from '../assets/galImg6.png';
import galImg7 from '../assets/galImg7.png';
import galImg8 from '../assets/galImg8.png';
import galImg9 from '../assets/galImg9.png';

export default function Gallery() {
    return (
        <div className="gallery">
            <p>Share your setup with</p>
            <p>#FuniroFurniture</p>
            <div className="furniture-grid">
                <div className="furniture-1">
                    <img src={galImg1} alt="Furniture 1"/>
                </div>
                <div className="furniture-2">
                    <img src={galImg2} alt="Furniture 2"/>
                </div>
                <div className="furniture-3">
                    <img src={galImg3} alt="Furniture 3"/>
                </div>
                <div className="furniture-4">
                    <img src={galImg4} alt="Furniture 4"/>
                </div>
                <div className="furniture-5">
                    <img src={galImg5} alt="Furniture 5"/>
                </div>
                <div className="furniture-6">
                    <img src={galImg6} alt="Furniture 6"/>
                </div>
                <div className="furniture-7">
                    <img src={galImg7} alt="Furniture 7"/>
                </div>
                <div className="furniture-8">
                    <img src={galImg8} alt="Furniture 8"/>
                </div>
                <div className="furniture-9">
                    <img src={galImg9} alt="Furniture 9"/>
                </div>
            </div>
        </div>
    )
}