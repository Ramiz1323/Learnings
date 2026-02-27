import { getFeed } from "../services/post.api";
import { useContext } from "react";
import { PostContext } from "../post.context";

export function usePost(){
    const context = useContext(PostContext);
    const { loading, setLoading, post, setPost, feed, setFeed } = context ;

    async function handleFeed(){
        setLoading(true);
        const response = await getFeed();
        setFeed(response.posts);
        setLoading(false);
    }
    return {loading, feed, post,  handleFeed}
}