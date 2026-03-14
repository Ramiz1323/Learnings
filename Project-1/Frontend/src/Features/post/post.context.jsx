import { createContext, useState, useEffect } from "react";
import { fetchFeedData, toggleLike, createPost } from "./services/post.api";

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

const addPost = async (formData) => {
  setLoading(true);
  try {
    const data = await createPost(formData);
    // Option 1: Refetch the feed
    // await getFeed();
    // Option 2: Prepend the new post if backend returns it
    if (data.post) {
      setFeed((prevFeed) => [data.post, ...prevFeed]);
    } else {
      await getFeed();
    }
    return data;
  } catch (err) {
    console.error("Post creation failed:", err);
    throw err;
  } finally {
    setLoading(false);
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
        addPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
