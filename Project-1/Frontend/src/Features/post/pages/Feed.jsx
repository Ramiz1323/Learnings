import React, { useEffect } from "react";
import "../styles/Feed.scss";
import { usePost } from "../Hooks/usePost";
import Post from "../components/Post";

const Feed = () => {
  const { feed, getFeed, loading } = usePost();
  useEffect(() => {
    getFeed();
  }, []);
  if (loading) return <div className="loading">Loading Instagram Feed...</div>;
  return (
    <main>
      {feed && feed.length > 0 ? (
        feed.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p>No posts yet...</p>
      )}
    </main>
  );
};

export default Feed;
