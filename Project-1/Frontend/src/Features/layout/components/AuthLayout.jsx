import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="auth-layout-container">
      <div className="auth-card-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;