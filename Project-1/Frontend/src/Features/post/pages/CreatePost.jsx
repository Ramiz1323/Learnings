import React, { useState } from "react";
import { usePost } from "../Hooks/usePost";
import { useNavigate } from "react-router";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "../styles/CreatePost.scss";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const { addPost, loading } = usePost();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("img", image);

    try {
      await addPost(formData);
      navigate("/feed");
    } catch (err) {
      console.error(err);
      alert("Failed to create post");
    }
  };

  return (
    <div className="create-post-container">
      <div className="create-post-card">
        <h2>Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="image-upload-section">
            {preview ? (
              <div className="image-preview">
                <img src={preview} alt="Preview" />
                <button type="button" onClick={() => { setImage(null); setPreview(null); }} className="remove-btn">Remove</button>
              </div>
            ) : (
              <label className="upload-label">
                <AiOutlineCloudUpload className="upload-icon" />
                <span>Select from computer</span>
                <input type="file" accept="image/*" onChange={handleImageChange} hidden />
              </label>
            )}
          </div>
          
          <div className="caption-section">
            <textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxLength={2200}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading || !image}>
            {loading ? "Sharing..." : "Share"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
