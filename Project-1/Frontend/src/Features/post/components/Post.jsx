import React, { useState } from "react";
import {
  FaRegHeart,
  FaRegComment,
  FaHeart,
  FaRetweet,
  FaPaperPlane,
  FaRegBookmark,
} from "react-icons/fa";
import { useLike } from "../Hooks/usePost";
import { useAuth } from "../../auth/Hooks/useAuth";

const Post = ({ post }) => {
  const { likePost } = useLike();
  const { user } = useAuth();

  const isLiked = post.likes?.some((id) => String(id) === String(user?._id));

  const handleLike = () => {
    likePost(post._id);
  };

  return (
    <div className="post">
      <div className="post_header">
        <img src={post.user.profileImage} alt={post.user.username} />
        <div className="post_header_info">
          <h4>{post.user.username}</h4>
          <p>1h</p>
        </div>
      </div>

      <div className="post_body">
        <img src={post.imgUrl} alt="post content" />
      </div>

      <div className="post_footer">
        <div className="post_footer_icons">
          <div className="left_icons">
            <span onClick={handleLike} style={{display: "flex", gap:"5px"}}>
              <FaRegHeart />
              <span className="like-count">{post.likes?.length || 0}</span>
            </span>

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
  );
};

export default Post;
