import React from "react";
import { AppRoutes } from "./routes";
import "./style.scss";
import { AuthProvider } from "./Features/auth/auth.context.jsX";
import { PostProvider } from "./Features/post/post.context";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <AppRoutes />
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
