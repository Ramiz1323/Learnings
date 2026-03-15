# Project-1 Roadmap & Implementation Details

A sequence-wise breakdown of the features and their performance logic.

---

## 1. Authentication System
- **Backend**: Implemented `/register` and `/login` routes. Uses **JWT** for authentication. A custom `identifyUser` middleware extracts user data from tokens to protect routes.
- **Frontend**: Created Landing, Login, and Register pages. **Protected Routes** ensure only logged-in users can see the feed.

## 2. Core Post Logic (Backend)
- **Database**: MongoDB schema stores captions, ImageKit URLs, and User references.
- **Image Storage**: Integrated **ImageKit.io** for optimized cloud image hosting.
- **Feed API**: Fetches posts and uses `.populate("user")` to include author details (username, profile pic) in one request.

## 3. Home Feed (Frontend)
- **Data Flow**: `PostContext` manages the global feed state. `getFeed` fetches data on mount.
- **UI Components**: `Feed.jsx` maps through posts, rendering a reusable `Post.jsx` component for each entry.
- **Interaction**: The **Like** feature updates the UI instantly by matching the `postId` and updating the `likes` array in local state.

## 4. Add Post Feature (Frontend)
- **API Service**: Uses `FormData` to send images and text via `multipart/form-data`.
- **Image Preview**: Implemented `FileReader` API to show users their selected image before uploading.
- **State Integration**: Upon successful upload, the new post is **prepended** to the feed state, so it appears at the top without a full page reload. 

## 5. Navigation & Layout
- **Sidebar Navbar**: A persistent sidebar across all authenticated pages.
- **Dynamic Routing**: Uses `react-router` for seamless transitions between Feed, Create, and Profile sections.
