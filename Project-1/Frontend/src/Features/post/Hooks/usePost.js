import { useContext } from "react";
import { PostContext } from "../post.context";

const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error("Post hooks must be used within a PostProvider");
    }
    return context;
};

export function usePost() {
    return usePostContext();
}

export function useLike() {
    const { likePost, loading } = usePostContext();
    return { likePost, loading };
}