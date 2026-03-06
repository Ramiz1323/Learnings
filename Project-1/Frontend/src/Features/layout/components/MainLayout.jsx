import { Outlet } from 'react-router';
import Navbar from '../../../Features/home/components/Navbar'; 
import '../styles/mainLayout.scss';

const MainLayout = () => {
  return (
    <div className="main-layout-container">
      <aside className="sidebar-navigation">
        <Navbar />
      </aside>
      
      <main className="feed-content-area">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;