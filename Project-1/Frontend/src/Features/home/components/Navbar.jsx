import { NavLink } from 'react-router';
import { 
  AiFillHome, AiOutlineSearch, AiOutlineCompass, 
  AiOutlineHeart, AiOutlinePlusSquare 
} from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import '../styles/Navbar.scss';

const Navbar = () => {
  const navItems = [
    { path: '/feed', icon: <AiFillHome />, label: 'Home' },
    { path: '/search', icon: <AiOutlineSearch />, label: 'Search' },
    { path: '/explore', icon: <AiOutlineCompass />, label: 'Explore' },
    { path: '/reels', icon: <BiMoviePlay />, label: 'Reels' },
    { path: '/notifications', icon: <AiOutlineHeart />, label: 'Notifications' },
    { path: '/create', icon: <AiOutlinePlusSquare />, label: 'Create' },
    { path: '/profile', icon: <CgProfile />, label: 'Profile' },
  ];

  return (
    <nav className="side-navbar">
      <div className="nav-logo">
        <h1 className="logo-text">Instagram</h1>
        <span className="mobile-logo">📸</span>
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink 
              to={item.path} 
              className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="nav-more desktop-only">
        <div className="nav-item">
          <span className="nav-icon">☰</span>
          <span className="nav-label">More</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;