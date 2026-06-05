import DynamicBanner from "./DynamicBanner";
import Features from "./Features";
import BlogPost from "./BlogPost";
import blogImg1 from '../assets/blog1.png';
import blogImg2 from '../assets/blog2.png';
import blogImg3 from '../assets/blog3.png';
import postImg1 from '../assets/post1.png';
import postImg2 from '../assets/post2.png';
import postImg3 from '../assets/post3.png';
import postImg4 from '../assets/post4.png';
import postImg5 from '../assets/post5.png';


const RECENT_POSTS = [
    {
        id: 'post1',
        imgSrc: postImg1,
        title: 'Going all-in with millennial design'
    },
    {
        id: 'post2',
        imgSrc: postImg2,
        title: 'Exploring new ways of decorating'
    },
    {
        id: 'post3',
        imgSrc: postImg3,
        title: 'Handmade pieces that took time to make'
    },
    {
        id: 'post4',
        imgSrc: postImg4,
        title: 'Modern home in Milan'
    },
    {
        id: 'post5',
        imgSrc: postImg5,
        title: 'Colorful office redesign'
    }
];

export default function Blog() {
    return (
        <>
        <DynamicBanner title="Blog" />
        <div className="blogContainer">
            <div className="blogPosts">
                <BlogPost title="Going all-in with millennial design" pin="Wood" imgSrc={blogImg1} />
                <BlogPost title="Going all-in with millennial design" pin="Wood" imgSrc={blogImg2} />
                <BlogPost title="Going all-in with millennial design" pin="Wood" imgSrc={blogImg3} />
            </div>
            <div className="category-recentPosts">
                <div className="category">
                    <div className="searchBar">
                        <input type="text" />
                    </div>
                    <div className="categories">
                        <p>Categories</p>
                        <ul>
                            <li><span>Crafts</span><span>2</span></li>
                            <li><span>Design</span><span>8</span></li>
                            <li><span>Handmade</span><span>7</span></li>
                            <li><span>Interior</span><span>1</span></li>
                            <li><span>Wood</span><span>6</span></li>
                        </ul>
                    </div>
                    <div className="recentPosts">
                        <p>Recent Posts</p>
                        <ul>
                        {RECENT_POSTS.map((recentPost) =>
                            <li key={recentPost.id}>
                                <img src={recentPost.imgSrc} alt={recentPost.title} />
                                <div>
                                    <p>{recentPost.title}</p>
                                    <p>03 Aug 2022</p>
                                </div>
                            </li>
                        )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Features />
        </>
    )
}