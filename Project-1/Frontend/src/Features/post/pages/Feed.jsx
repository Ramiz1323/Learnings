import React, { useEffect } from "react";
import "../styles/Feed.scss";
import { usePost } from "../Hooks/usePost";
import Post from "../components/Post";

const Feed = () => {
  const { feed, getFeed, loading } = usePost();

  useEffect(() => {
    getFeed();
  }, []);

  if (loading) return (
    <div className="feed-loading">
      <div className="spinner"></div>
      <p>Loading Instagram Feed...</p>
    </div>
  );

  return (
    <main className="feed-main-container">
      <div className="feed-list">
        {feed && feed.length > 0 ? (
          feed.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <div className="no-posts">
            <h3>No posts yet...</h3>
            <p>Follow someone to see their posts here.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Feed;