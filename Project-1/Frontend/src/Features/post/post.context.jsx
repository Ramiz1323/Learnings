import { createContext, useState, useEffect } from "react";
import { getFeed as fetchFeedData } from "./services/post.api";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [feed, setFeed] = useState([]);

const getFeed = async () => {
    setLoading(true);
  try{
    const data = await fetchFeedData();
    setFeed(data.feed);
  }catch(err){
    console.log(err)
  }finally{
    setLoading(false);
  }
}

  return (
    <PostContext.Provider
      value={{ loading, setLoading, post, setPost, feed, setFeed, getFeed }}
    >
      {children}
    </PostContext.Provider>
  );
};
