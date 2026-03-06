import { Link } from "react-router";
import "../styles/landing.scss";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="logo-text">Instagram</h1>

        <p className="tagline">
          Connect with friends and share your world.
        </p>

        <div className="action-buttons">
          <Link to="/login" className="btn btn-primary">
            Log In
          </Link>

          <Link to="/register" className="btn btn-secondary">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="landing-footer">
        © {new Date().getFullYear()} Instagram Clone
      </div>
    </div>
  );
};

export default Landing;