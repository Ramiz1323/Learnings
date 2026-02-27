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
  const { loading, feed, post, handleFeed } = usePost();
  useEffect(() => {
    handleFeed();
    console.log(post);
  }, []);

  if (loading || !feed) {
    return <h1>Loading...</h1>;
  }


  return (
    <main>
      <div className="post">
        <div className="post_header">
          <img
            src="https://instagram.fccu27-3.fna.fbcdn.net/v/t51.82787-15/558857854_17964336629972637_6909349203322096249_n.webp?_nc_cat=100&ig_cache_key=MzczNTM3NDMwNDE1OTg2MDU0Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4NzcwLnNkci5DMyJ9&_nc_ohc=-yC9IWelqQ4Q7kNvwH7CkJK&_nc_oc=Adk2o4O2k85dYz365_rwb0dqgVqOKfr2c7qj3v2kX7FZJYJwJx7yPFI1CGVxEFns8fHjCrEJoVXGzuscj7-sQ6yw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu27-3.fna&_nc_gid=XUGXX3KdE4ki-QiiBcw7Dw&oh=00_Afulvmm_yThhCQfyEhY9Uk3vmif6KlrV5NvB3tQx7MLrEg&oe=69A7294F"
            alt=""
          />
          <div className="post_header_info">
            <h4>kuro.ejs</h4>
            <p>1h</p>
          </div>
        </div>
        <div className="post_body">
          <img
            src="https://instagram.fccu27-2.fna.fbcdn.net/v/t51.82787-15/582042394_17968440782972637_7910248775646869903_n.webp?_nc_cat=107&ig_cache_key=Mzc2NDQzODQxNjA5MzMxMjM3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjk1MHgxMDgwLnNkci5DMyJ9&_nc_ohc=TyYmMVA_NOEQ7kNvwFNbhEe&_nc_oc=Adn6dMXSDfbnks973YT6omzGHGnW82WlwFGuNifko5Kj2PC3rNnAcPBNtPJLUpbDSec-W6iJ5wmPvLUIK1b8b5aZ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fccu27-2.fna&_nc_gid=67bI_lNG5B8Z6vvDpJeWvQ&oh=00_Afs2wdw5SL5geBaR13dCfysWz6vHoYbeFhdbbEWERIhyZA&oe=69A71A07"
            alt=""
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
            <h4>Username</h4>
            <p>Lorem ipsum dolor ...more</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;
