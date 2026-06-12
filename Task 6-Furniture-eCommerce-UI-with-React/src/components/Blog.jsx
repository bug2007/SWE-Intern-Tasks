import DynamicBanner from "./DynamicBanner";
import Features from "./Features";
import BlogPost from "./BlogPost";
import { useState } from "react";

import { RECENT_POSTS, BLOG_POSTS } from "../data";

const TOTAL_BLOG_POSTS= BLOG_POSTS.length; // 8
const TOTAL_BUTTONS = Math.ceil(TOTAL_BLOG_POSTS / 3);  // 3 buttons
const LAST_BLOG_POSTS = TOTAL_BLOG_POSTS % 3; // 2 last blog posts

let start = 0;
let end = 3;

export default function Blog() {
    const [activeBtn, setActiveBtn] = useState(1);
    const [showPost, setShowPost] = useState(null);

    let buttons = [];
    for (let i = 1; i <= TOTAL_BUTTONS; i++) {
        buttons.push(<button className={i==activeBtn ? 'active' : ''} onClick={() => handleButtonClick(i)} key={i}>{i}</button>)
    }

    function handleButtonClick(page) {
        start = (page-1) * 3;
        end = page === TOTAL_BUTTONS ? start + LAST_BLOG_POSTS : page * 3
        setActiveBtn(page)
        setShowPost(null)
    }

    function handlePostClick(imgSrc, title, pin) {
        setShowPost({imgSrc, title, pin});
    }

    return (
        <>
        <DynamicBanner title="Blog" />
        <div className="blogContainer">
            <div className="blog-category-recentPosts">
                <div className="blogPosts">
                    {!showPost && BLOG_POSTS.slice(start, end).map((blogPost) =>
                        <BlogPost title={blogPost.title} pin={blogPost.pin} imgSrc={blogPost.imgSrc} postDate='06 Jun 2026 ' />)
                    }
                    {showPost && <BlogPost title={showPost.title} pin={showPost.pin} imgSrc={showPost.imgSrc} postDate='03 Jun 2026' />}
                </div>
                <div className="category-recentPosts">
                    <div className="searchBar">
                        <input type="text" />
                        <i class="bi bi-search"></i>
                    </div>
                    <div className="category">
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
                                <li key={recentPost.id} onClick={() => handlePostClick(recentPost.imgSrc, recentPost.title, recentPost.pin)}>
                                    <img src={recentPost.imgSrc} alt={recentPost.title} />
                                    <div>
                                        <p>{recentPost.title}</p>
                                        <span>03 Jun 2026</span>
                                    </div>
                                </li>
                            )}
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="page-buttons">
                {buttons}
                <button onClick={() => {activeBtn < TOTAL_BUTTONS && handleButtonClick(activeBtn + 1)}}>Next</button>
            </div>
        </div>
        <Features />
        </>
    )
}