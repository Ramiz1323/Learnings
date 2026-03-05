import { createContext, useState, useEffect } from "react";
import { fetchFeedData, toggleLike } from "./services/post.api";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [feed, setFeed] = useState([]);

  const getFeed = async () => {
    setLoading(true);
    try {
      const data = await fetchFeedData();
      setFeed(data.feed);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

const likePost = async (postId) => {
  try {
    const data = await toggleLike(postId); // Backend must return { likes: [...] }
    
    setFeed((prevFeed) =>
      prevFeed.map((post) => {
        if (post._id === postId) {
          // Tier 3: Create a NEW object reference with the updated likes array
          return { ...post, likes: data.likes }; 
        }
        // IMPORTANT: Always return the post for the else case to avoid 'undefined'
        return post; 
      })
    );
  } catch (err) {
    console.error("Context update failed:", err);
  }
};
  return (
    <PostContext.Provider
      value={{
        loading,
        setLoading,
        post,
        setPost,
        feed,
        setFeed,
        getFeed,
        likePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
