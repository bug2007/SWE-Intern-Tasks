import adminIconImg from '../assets/adminIcon.png';
import pinIconImg from '../assets/pinIcon.png';
import postDateImg from '../assets/postDate.png';

export default function BlogPost({title, pin, imgSrc}) {
    return (
        <>
        <img src={imgSrc} alt="" />
        <div className="list">
            <div className="admin">
                <img src={adminIconImg} alt="Admin Icon" />
                <span>Admin</span>
            </div>
            <div className="postDate">
                <img src={postDateImg} alt="Post Date Icon" />
                <span>14 Oct 2022</span>
            </div>
            <div className="pin">
                <img src={pinIconImg} alt="Pin Icon" />
                <span>{pin}</span>
            </div>
        </div>
        <p>{title}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
        </>
    )
}