import React, { useEffect } from "react";
import "../styles/Feed.scss";
import {
  FaRegHeart,
  FaRegComment,
  FaRetweet,
  FaPaperPlane,
  FaRegBookmark,
} from "react-icons/fa";
import { usePost } from "../Hooks/usePost";

const Feed = () => {
    const { feed, getFeed, loading } = usePost();
    useEffect(() => {
        getFeed();
    }, []);
    if (loading) return <div className="loading">Loading Instagram Feed...</div>;
  return (
    <main>
  {feed && feed.length > 0 ? (
    feed.map((post) => (
      <div className="post" key={post._id}> 
        <div className="post_header">
          <img
            src={post.user.profileImage} 
            alt={post.user.username}
          />
          <div className="post_header_info">
            <h4>{post.user.username}</h4>
            <p>1h</p>
          </div>
        </div>
        
        <div className="post_body">
          <img
            src={post.imgUrl} 
            alt="post content"
          />
        </div>

        <div className="post_footer">
          <div className="post_footer_icons">
            <div className="left_icons">
              <FaRegHeart />
              <FaRegComment />
              <FaRetweet />
              <FaPaperPlane />
            </div>
            <FaRegBookmark className="save_icon" />
          </div>
          <div className="post_footer_description">
            <h4>{post.user.username}</h4>
            <p>{post.caption}</p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No posts yet...</p>
  )}
</main>
  );
};

export default Feed;
